export const sortASCName = (a, b) => {
  if (a.body < b.body)
    return 1;
  if (a.body > b.body)
    return -1;
  return 0;
}

export const sortDSCName = (a, b) => {
  if (a.body < b.body)
    return -1;
  if (a.body > b.body)
    return 1;
  return 0;
}

export const sortASCDone = (a, b) => {
  if (a.done)
    return -1;
  if (b.done)
    return 1;
  return 0;
}

export const sortDSCDone = (a, b) => {
  if (a.done)
    return 1;
  if (b.done)
    return -1;
  return 0;
}

export const randomString = (len, charSet) => {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
    	var randomPoz = Math.floor(Math.random() * charSet.length);
    	randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
}