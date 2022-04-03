let now = new Date();

// PC의 표준시간대 설정 관계 없이 한국 시간 표시 - 지금 시간을 string으로
const todayConvertDateToString = () => {
    // UTC 시간 계산
    const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    
    // UTC to KST (UTC + 9시간)
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + (KR_TIME_DIFF));

    const strToday = kr_curr.toISOString().replace(/T/, ' ').replace(/\..+/, '')

    return strToday;
}

const convertStringToDate = (strDate)  => {
    const strToDate = new Date(strDate);

    return strDate;
}