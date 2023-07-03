/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set=new Set()
    for(let email of emails){
        let [local,domain]=email.split('@')
        // local=local.replaceAll('.','') .replace(/\+.*/, '') // 9% 36%
        local=local.replace(/\./g,'') .replace(/\+.*/, '') // 59% 32%
        // local=local.split('+')[0].replace(/\./g,'') // 11% 56%
        set.add(local+'@'+domain)
    }
    return set.size
};
