import fs from 'fs'
import faker from 'faker'
function generateUsers(){
    let user=[]
    let address=[]
    faker.setLocale('zh_CN')
    for(let i=1;i<50;i++){
        user.push({
            "id":i,
            "name":faker.name.firstName()+faker.name.lastName(),
            "jobtitle":faker.name.jobTitle(),
            "email":faker.internet.email()
        })
        address.push({
            "id":i,
            "city":faker.address.city(),
            "streename":faker.address.streename()
        })
    }
    return {"user":user,"address":address}
}
let data=generateUsers()
fs.writeFileSync('data.json',JSON.stringify(data))