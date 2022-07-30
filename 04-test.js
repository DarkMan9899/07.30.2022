//Using the constructor function, create an object and methods to support the following functionality
// const profileInfo = new ProfileInfo();
// profileInfo.setUsername(‘username’);
// profileInfo.getUsername(‘username’);
// profileInfo.setEmail(‘abc@example.com’);
// profileInfo.getEmail(‘abc@example.com’)
// profileInfo.setAddress(‘The user address’);
// profileInfo.getEmail()
//
//
//
// const user = new User();
// user.setName(‘John’);
// user.getName();
// user.setAge(63);
// user.getAge();
// user.setProfileInfo(new ProfileInfo());
// user.getProfileInfo();


function UserInfo(){
    this.setUsername = function(name){
        this.setUsername = name;
    };
    this.getUsername = function(){
        return this.name;
    };
    this.setEmail = function(email){
        this.email = email;
    };
    this.getEmail = function(){
        return this.email;
    };
    this.setAddress = function(address){
        this.address = address;
    };
    this.getAddress = function(){
        return this.address;
    };
}
function User(){
    this.setName = function(name){
        this.name = name;
    };
    this.getName = function(){
        return this.name;
    };
    this.setAge = function(age){
        this.age = age;
    };
    this.getAge = function(){
        return this.age;
    };
    this.setUserInfo = function(newUser){
        this.newProfil = newUser;
    };
    this.getUserInfo = function(){
        return this.newProfil;
    };
}
const profileInfo = new UserInfo();
profileInfo.setUsername("username");
profileInfo.getUsername("username");
profileInfo.setEmail("abc@example.com");
profileInfo.getEmail("abc@example.com");
profileInfo.setAddress("The user address");
profileInfo.getAddress();
console.log(profileInfo);
const user = new User();
user.setName("John");
user.getName();
user.setAge(63);
user.getAge();
user.setUserInfo(new UserInfo());
user.getUserInfo();
console.log(user);