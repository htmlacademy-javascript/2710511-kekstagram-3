function getStringLength(string, length) {
  if(string.length <= length) {
    return true;
  }
  return false;
}

function palindromeCheck(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    const char = normalizedString[i];
    newString += char;
  }
  return newString === normalizedString;
}

function extractNumbers(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!Number.isNaN(parseInt(char, 10))) {
      result += char;
    }
  }
  return result === '' ? NaN : Number(result);
}

function convertToMinutes(time) {
  const parts = time.split(':');
  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);
  return hours * 60 + minutes;
}

function checkMeetingTime(workStart, workEnd, meetingStart, duration) {
  const workStartMinutes = convertToMinutes(workStart);
  const workEndMinutes = convertToMinutes(workEnd);
  const meetingStartMinutes = convertToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

checkMeetingTime('08:00', '17:30', '14:00', 90); // true
checkMeetingTime('8:0', '10:0', '8:0', 120); // true
checkMeetingTime('08:00', '14:30', '14:00', 90); // false
checkMeetingTime('14:00', '17:30', '08:0', 90); // false
checkMeetingTime('8:00', '17:30', '08:00', 900); // false
