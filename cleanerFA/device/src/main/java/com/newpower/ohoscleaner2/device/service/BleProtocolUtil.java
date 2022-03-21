package com.newpower.ohoscleaner2.device.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/**
 *
 * @author FanY
 * @since 2022-02
 */
public class BleProtocolUtil {
    @Deprecated
    private static final int COMMAND_BYTE_SIZE = 11;
    @Deprecated
    private static final int WORD_HEX_SIZE = 2 * COMMAND_BYTE_SIZE;
    private static final String PROTOCOL_PREFIX = "FA";
    private static final String PROTOCOL_SUFFIX = "FB";
    private static final String PRODUCT_TYPE = "01";
    private static final String DATA_LENGTH = "04";
    //private static final String NULL_BYTE = "00";
    private static final String NULL_BYTES = "000000";
    private static final int PRODUCT_TYPE_NUM = 0x01;
    @Deprecated
    private static final int DATA_DOWN_LENGTH_NUM = 0x04;
    @Deprecated
    private static final int CHECKSUM_PREPARED = PRODUCT_TYPE_NUM + DATA_DOWN_LENGTH_NUM;
    //private static final String STATE_ON_HEX = "01";
    //private static final String STATE_OFF_HEX = "00";
    //private static final int STATE_ON = 1;
    //private static final int STATE_OFF = 0;
    public static final String RESULT_KEY = "packet";

    public static boolean onBleUpMessage(String msg, BleProtocolCallback callback) {
        if (!isValidBlePacket(Objects.requireNonNull(msg).toUpperCase())) {
            return false;
        }
        String cmdWordHexStr = PacketMeta.getCommandWordHexStr(msg);
        CommandWord cmdWord = CommandWord.getCommandWord(cmdWordHexStr);
        Objects.requireNonNull(cmdWord).getCommandExecutor().execute(msg, callback);
        return true;
    }

    public static boolean onBleDownMessage(String msg, BleProtocolCallback callback) {
        int pos = msg.indexOf(":");
        String cmdWordHexStr = msg.substring(0, pos);
        CommandWord cmdWord = CommandWord.getCommandWord(cmdWordHexStr);
        String data = cmdWord.isUpDown() ? msg.replace(cmdWordHexStr, "D") : msg.substring(pos+1);
        Objects.requireNonNull(cmdWord).getCommandExecutor().execute(data, callback);
        return true;
    }

    public static boolean isValidBlePacket(String msg) {
        return /*msg.length() == WORD_HEX_SIZE*/ // Variable Length
            /*&&*/ msg.startsWith(PROTOCOL_PREFIX)
            && msg.endsWith(PROTOCOL_SUFFIX)
            && checkSum(msg);
    }

    public static boolean checkSum(String msg) {
        int dataLength = Integer.parseInt(PacketMeta.getDataLengthHexStr(msg),16);
        int packed = Integer.parseInt(PacketMeta.getChecksumHighHexStr(msg, dataLength), 16)
                + Integer.parseInt(PacketMeta.getChecksumLowHexStr(msg, dataLength), 16);
        int calculated = calculateSum(msg, dataLength);
        return packed == calculated;
    }

    public static int calculateSum(String msg, int dataLength) {
        int sum = PRODUCT_TYPE_NUM + dataLength + Integer.parseInt(PacketMeta.getCommandWordHexStr(msg), 16);
        String data = PacketMeta.getDataHexStr(msg, dataLength);
        return sum + calculateDataSum(data, dataLength);
    }

    public static int calculateDataSum(String data, int dataLength) {
        int sum = 0;
        for(int i = 0; i < dataLength; i++) {
            sum += Integer.parseInt(data.substring(i, i+1), 16);
        }
        return sum;
    }

    public static class BleDownPacket {
        /* DATA_LENGTH = 4 */
        private CommandWord cmd;
        private int byte0;
        //private String fullDataHex;

        public static BleDownPacket obtain() {
            return new BleDownPacket();
        }

        public BleDownPacket commandWord(CommandWord cmd) {
            this.cmd = cmd;
            return this;
        }

        public BleDownPacket byte0(int byte0) {
            this.byte0 = byte0;
            return this;
        }

        //public BleDownPacket fullDataHex(String fullDataHex) {
        //    this.fullDataHex = fullDataHex;
        //}

        private int prepareBleDownSum(CommandWord cmd, int byte0) {
            return CHECKSUM_PREPARED + cmd.getValue() + byte0;
        }

        public String toBleHexStr() {
            int s = prepareBleDownSum(cmd, byte0);
            return new StringBuffer()
                    .append(PROTOCOL_PREFIX)
                    .append(PRODUCT_TYPE)
                    .append(cmd.getHexStr())
                    .append(DATA_LENGTH)
                    .append(formatOneByteToHexString(byte0))
                    .append(NULL_BYTES)
                    .append(formatOneByteToHexString(0xf0 & s))
                    .append(formatOneByteToHexString(0x0f & s))
                    .append(PROTOCOL_SUFFIX)
                    .toString();
        }

        public String toBleHexStrWithFullData(String fullDataHex, int dataSum) {
            int s = prepareBleDownSum(cmd, dataSum);
            return new StringBuffer()
                    .append(PROTOCOL_PREFIX)
                    .append(PRODUCT_TYPE)
                    .append(cmd.getHexStr())
                    .append(DATA_LENGTH)
                    .append(fullDataHex)
                    .append(formatOneByteToHexString(0xf0 & s))
                    .append(formatOneByteToHexString(0x0f & s))
                    .append(PROTOCOL_SUFFIX)
                    .toString();
        }
    }

    public static class PacketMeta {
        public static String getProductTypeHexStr(String msgHexStr) {
            return msgHexStr.substring(2, 4);
        }

        public static String getCommandWordHexStr(String msgHexStr) {
            return msgHexStr.substring(4, 6);
        }

        public static String getDataLengthHexStr(String msgHexStr) {
            return msgHexStr.substring(6, 8);
        }

        public static String getDataHexStr(String msgHexStr) {
            return msgHexStr.substring(8, 16);
        }

        public static String getDataHexStr(String msgHexStr, int dataLength) {
            return msgHexStr.substring(8, 8 + 2 * dataLength);
        }

        @Deprecated
        public static String getChecksumHighHexStr(String msgHexStr) {
            return msgHexStr.substring(16, 18);
        }

        public static String getChecksumHighHexStr(String msgHexStr, int dataLength) {
            return msgHexStr.substring(8 + 2 * dataLength, 10 + 2 * dataLength);
        }

        @Deprecated
        public static String getChecksumLowHexStr(String msgHexStr) {
            return msgHexStr.substring(18, 20);
        }

        public static String getChecksumLowHexStr(String msgHexStr, int dataLength) {
            return msgHexStr.substring(10 + 2 * dataLength, 12 + 2 * dataLength);
        }
    }

    @Deprecated
    public static final CommandExecutor VERSION_UP_DOWN_EXECUTOR = (p, c) -> {
        if (p.startsWith("D:")) {
            executeStateCommand(c, CommandWord.VERSION_UP_DOWN/*, 0*/);
        } else {

        }
    };

    @Deprecated
    public static final CommandExecutor BLE_STATE_DOWN_EXECUTOR = new StateCommandExecutor(CommandWord.BLE_STATE_DOWN);

    public static final CommandExecutor DEVICE_STATE_UP_EXECUTOR = (p, c) -> {
        String data = PacketMeta.getDataHexStr(p);
        int battery = Integer.parseInt(data.substring(0, 2), 16);
        int charging = battery & 0x80;
        int remaining = battery & 0x7f;
        int poweredOn = Integer.parseInt(data.substring(2, 3), 16);
        int mode = Integer.parseInt(data.substring(3, 4), 16);
        int clogged = Integer.parseInt(data.substring(4, 6), 16);
        int ledOn = Integer.parseInt(data.substring(6, 8), 16);


        //c.onExecuted();
    };

    public static final CommandExecutor CLEAR_STRAINER_ALERT_DOWN_EXECUTOR = new StateCommandExecutor(CommandWord.CLEAR_STRAINER_ALERT_DOWN);
    //(p, c) -> {
    //    final int CLEAR = 0;
    //    String body = BleDownPacket
    //            .obtain()
    //            .commandWord(CommandWord.CLEAR_STRAINER_ALERT_DOWN)
    //            .byte0(CLEAR)
    //            .toBleHexStr();
    //    Map<String, String> result = new HashMap<>();
    //    result.put(RESULT_KEY, body);
    //    c.onExecuted(result);
    //};

    public static final CommandExecutor GEAR_MODE_DOWN_EXECUTOR = new StateCommandExecutor(CommandWord.GEAR_MODE_DOWN);
    //(p, c) -> {
    //    executeStateCommand(c, CommandWord.GEAR_MODE_DOWN, Integer.parseInt(p));
//        int state = p != null ? STATE_ON : STATE_OFF;
//        String body = BleDownPacket
//                .obtain()
//                .commandWord(CommandWord.GEAR_MODE_DOWN)
//                .byte0(state)
//                .toBleHexStr();
//        Map<String, String> result = new HashMap<>();
//        result.put(RESULT_KEY, body);
//        c.onExecuted(result);
    //};

    public static final CommandExecutor POWER_SWITCH_DOWN_EXECUTOR = new StateCommandExecutor(CommandWord.POWER_SWITCH_DOWN);
    //(p, c) -> {
        //c.onExecuted(formatResult(CommandWord.POWER_SWITCH_DOWN, Integer.parseInt(p)));
    //    executeStateCommand(c, CommandWord.POWER_SWITCH_DOWN, Integer.parseInt(p));
    //};

    public static final CommandExecutor RESET_UP_EXECUTOR = (p, c) -> {};

    public static final CommandExecutor LED_SWITCH_DOWN_EXECUTOR = new StateCommandExecutor(CommandWord.LED_SWITCH_DOWN); //(p, c) -> {
        //c.onExecuted(formatResult(CommandWord.LED_SWITCH_DOWN, Integer.parseInt(p)));
        //executeStateCommand(c, CommandWord.LED_SWITCH_DOWN, Integer.parseInt(p));
//        String body = BleDownPacket
//                .obtain()
//                .commandWord(CommandWord.LED_SWITCH_DOWN)
//                .byte0(Integer.parseInt(p) & 1)
//                .toBleHexStr();
//        Map<String, String> result = new HashMap<>();
//        result.put(RESULT_KEY, body);
//        c.onExecuted(result);
    //};

    public static final CommandExecutor TIME_SINCE_UNIX_EPOCH_UTC_DOWN_EXECUTOR = (p, c) -> {
        String data = Long.toHexString(System.currentTimeMillis() / 1000);
        int dataSum = calculateDataSum(data, DATA_DOWN_LENGTH_NUM);
        String body = BleDownPacket
                .obtain()
                .commandWord(CommandWord.TIME_SINCE_UNIX_EPOCH_UTC_DOWN)
                .toBleHexStrWithFullData(data, dataSum);
        Map<String, Object> result = new HashMap<>();
        result.put(RESULT_KEY, body);
        c.onExecuted(result);
    };

    public static final CommandExecutor USED_HISTORY_UP_DOWN_EXECUTOR = (p, c) -> {
        if (p.startsWith("D:")) {
            executeStateCommand(c, CommandWord.USED_HISTORY_UP_DOWN/*, 0*/);
        } else {

        }
    };

//    public static final CommandExecutor USED_HISTORY_DOWN_EXECUTOR = (p, c) -> {
//        String body = BleDownPacket
//                .obtain()
//                .commandWord(CommandWord.USED_HISTORY_UP_DOWN)
//                .byte0(0)
//                .toBleHexStr();
//        Map<String, String> result = new HashMap<>();
//        result.put(RESULT_KEY, body);
//        c.onExecuted(result);
//    };
//
//    public static final CommandExecutor USED_HISTORY_UP_EXECUTOR = (p, c) -> {
//        Map<String, String> result = new HashMap<>();
//        c.onExecuted(result);
//    };

    public static final CommandExecutor USED_HISTORY_UP_EXT_EXECUTOR = (p, c) -> {};

    public static final Map<CommandWord, CommandExecutor> COMMAND_EXECUTORS = new HashMap<>();

    static {
        COMMAND_EXECUTORS.put(CommandWord.VERSION_UP_DOWN, CommandExecutor.NULL_COMMAND);
        COMMAND_EXECUTORS.put(CommandWord.BLE_STATE_DOWN, BLE_STATE_DOWN_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.DEVICE_STATE_UP, DEVICE_STATE_UP_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.CLEAR_STRAINER_ALERT_DOWN, CLEAR_STRAINER_ALERT_DOWN_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.GEAR_MODE_DOWN, GEAR_MODE_DOWN_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.POWER_SWITCH_DOWN, POWER_SWITCH_DOWN_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.RESET_UP, RESET_UP_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.LED_SWITCH_DOWN, LED_SWITCH_DOWN_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.TIME_SINCE_UNIX_EPOCH_UTC_DOWN, TIME_SINCE_UNIX_EPOCH_UTC_DOWN_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.USED_HISTORY_UP_DOWN, USED_HISTORY_UP_DOWN_EXECUTOR);
        COMMAND_EXECUTORS.put(CommandWord.USED_HISTORY_EXT_UP, USED_HISTORY_UP_EXT_EXECUTOR);
    }

    enum CommandWord {
        @Deprecated
        VERSION_UP_DOWN("01", true),
        @Deprecated
        BLE_STATE_DOWN("02"),
        DEVICE_STATE_UP("03"),
        CLEAR_STRAINER_ALERT_DOWN("04"),
        GEAR_MODE_DOWN("05"),
        POWER_SWITCH_DOWN("06"),
        RESET_UP("07"),
        LED_SWITCH_DOWN("08"),
        TIME_SINCE_UNIX_EPOCH_UTC_DOWN("09"),
        USED_HISTORY_UP_DOWN("0A", true),
        USED_HISTORY_EXT_UP("0B");

        public final int val;
        public final String hex;
        private boolean updown = false;

        CommandWord(String hexStr) {
            val = Integer.valueOf(hexStr, 16);
            hex = hexStr;
        }

        CommandWord(String hexStr, boolean special) {
            val = Integer.valueOf(hexStr, 16);
            hex = hexStr;
            updown = special;
        }

        public int getValue() {
            return val;
        }

        public String getHexStr() {
            return hex;
        }

        public boolean isUpDown() {
            return updown;
        }

        public CommandExecutor getCommandExecutor() {
            return COMMAND_EXECUTORS.get(this);
        }

        static final Map<String, CommandWord> WORDS = new HashMap<>();

        public static CommandWord getCommandWord(String hexStr) {
            return WORDS.get(hexStr);
        }

        static {
            CommandWord.WORDS.put("01", VERSION_UP_DOWN);  //Deprecated
            CommandWord.WORDS.put("02", BLE_STATE_DOWN);
            CommandWord.WORDS.put("03", DEVICE_STATE_UP);
            CommandWord.WORDS.put("04", CLEAR_STRAINER_ALERT_DOWN);
            CommandWord.WORDS.put("05", GEAR_MODE_DOWN);
            CommandWord.WORDS.put("06", POWER_SWITCH_DOWN);
            CommandWord.WORDS.put("07", RESET_UP);
            CommandWord.WORDS.put("08", LED_SWITCH_DOWN);
            CommandWord.WORDS.put("09", TIME_SINCE_UNIX_EPOCH_UTC_DOWN);
            CommandWord.WORDS.put("0A", USED_HISTORY_UP_DOWN);
            CommandWord.WORDS.put("0B", USED_HISTORY_EXT_UP);
        }
    }

    interface BleProtocolCallback {
        void onExecuted(Map<String, Object> result);
    }

    interface CommandExecutor {
        void execute(String param, BleProtocolCallback callback);
        CommandExecutor NULL_COMMAND = (p, c) -> {};
    }

    private static class StateCommandExecutor implements CommandExecutor {
        private final CommandWord cmdWord;

        public StateCommandExecutor(CommandWord cmdWord) {
            this.cmdWord = cmdWord;
        }

        @Override
        public void execute(String p, BleProtocolCallback c) {
            Objects.requireNonNull(c).onExecuted(formatResult(cmdWord, Integer.parseInt(p)));
        }

        //private Map<String, String> formatResult(CommandWord cmdWord, int value) {
        //    String body = BleDownPacket
        //            .obtain()
        //            .commandWord(cmdWord)
        //            .byte0(value & 1)
        //            .toBleHexStr();
        //    Map<String, String> result = new HashMap<>();
        //    result.put(RESULT_KEY, body);
        //    return result;
        //}

        //private void executeStateCommand(BleProtocolCallback c, CommandWord w, int v) {
        //    c.onExecuted(formatResult(w, v));
        //}
    }

    private static String formatOneByteToHexString(int h) {
        h &= 0xff;
        String s = Integer.toHexString(h);
        return h == (h & 0x0f) ? "0" + s : s;
    }

    private static Map<String, Object> formatResult(CommandWord cmdWord, int value) {
        String body = BleDownPacket
                .obtain()
                .commandWord(cmdWord)
                .byte0(value & 1)
                .toBleHexStr();
        Map<String, Object> result = new HashMap<>();
        result.put(RESULT_KEY, body);
        return result;
    }

    private static void executeStateCommand(BleProtocolCallback c, CommandWord w/*, int v*/) {
        Objects.requireNonNull(c).onExecuted(formatResult(w, /*v=*/0));
    }

//    private static String parseStateByte() {
//        return
//    }

    //public static String getSecondsSinceUnixEpochUtcHexStr() {
    //    //ohos.miscservices.timeutility.Time.getCurrentTime()
    //    return Long.toHexString(System.currentTimeMillis() / 1000);
    //}

//    private static boolean checkBiCommand(String cmdWordHexStr) {
//        return "".equals()
//    }
}