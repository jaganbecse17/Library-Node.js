# Library management system using node and postgres database

## Response Structure

```javascript
{
    "statusCode": 200,
    "status": "Success" || "Failure" || "Error"
    "data": {} || [],
    "message": "Response Message...",
    "meta": {
        "toast": true || false,
        "ResType" : "Json" || "Base64" || "byteArray",
        "sessionActive" : true || false
    }
}


```


## User Story 

> User controller

- create user - new user creation -> /user/createUser - post
- update user - profile update by user -> /user/updateUserDetails - post
- update user - admin -> /user/admin/updateUserDetails
- update password - by user -> /user/action/updateUserPassword
- reset password - link generation - /user/action/userPwdRest
- user mapping - role, team mapping by admin - /user/admin/action/updateUserMapping
- fetch profile - common - /user/fetchProfile
- fetch all user - by admin /user/admin/fetchListOfUsers - filter
