function solution(id_list, report, k) {
    var answer = Array.from({length: id_list.length}, ()=>0);
    let reportList = new Map();
    let vanList = [];
    
    // 중복 신고 제거
    report = [...new Set(report)];
    
    // 신고횟수 결과 map 세팅
    id_list.forEach(item => reportList.set(item, 0));
    
    report = report.map(item => item.split(" "));
    
    // 신고 횟수 처리
    report.forEach(item => reportList.set(item[1], reportList.get(item[1]) + 1));
    
    // 정지 이용자 처리
    id_list.forEach(item => reportList.get(item) >= k && vanList.push(item));
    
    //answer에 답 입력
    report.forEach(item => vanList.includes(item[1]) && answer[id_list.indexOf(item[0])]++);
    return answer;
}