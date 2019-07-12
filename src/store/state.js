export default {
    testScenarioList: [
        {tsId: "ts1", tsName: "시나리오1"},
        {tsId: "ts2", tsName: "시나리오2"},
        {tsId: "ts3", tsName: "시나리오3"},
        {tsId: "ts4", tsName: "시나리오4"},
    ],
    testHistoryList: [
        {date: "20190606", time: "010000", tsId: "ts1"},
        {date: "20190607", time: "020000", tsId: "ts2"},
        {date: "20190606", time: "030000", tsId: "ts1"},
        {date: "20190606", time: "050000", tsId: "ts1"},
    ],
    testCaseList: [
        {tcId: "tc1", tcName: "테스트케이스1", tsId: "ts1"},
        {tcId: "tc2", tcName: "테스트케이스2", tsId: "ts2"},
        {tcId: "tc3", tcName: "테스트케이스3", tsId: "ts2"},
        {tcId: "tc4", tcName: "테스트케이스4", tsId: "ts3"},
        {tcId: "tc5", tcName: "테스트케이스5", tsId: "ts4"},
    ],
    currentComponent: "TestExecution",
    selectTsId: "",
    isCollapse: false,
    asideWidth: "210px"
};
