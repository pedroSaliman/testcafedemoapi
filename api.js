fixture `requestapi`
test("the frist api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/users?page=2",
        method:"Get"
    });
    await t.expect(result.body.page).eql(2);
    await t.expect(result.status).eql(200);
})
test("the single user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/users/2",
        method:"Get"
    });
    await t.expect(result.body.data.email).eql("janet.weaver@reqres.in");
    await t.expect(result.status).eql(200);
})
test("the  user notfound api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/users/23",
        method:"Get"
    });
    await t.expect(result.status).eql(404);
})

test("the  list resources api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/unknown",
        method:"Get"
    });
    await t.expect(result.body.data[0].name).eql("cerulean");

    await t.expect(result.status).eql(200);
})



test("the  single resources api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/unknown/2",
        method:"Get"
    });
    await t.expect(result.body.data.name).eql("fuchsia rose");
    await t.expect(result.body.data.year).eql(2001);
    await t.expect(result.body.data.color).eql("#C74375");

    await t.expect(result.status).eql(200);
})

test("the  single resources not found api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/unknown/23",
        method:"Get"
    });
    

    await t.expect(result.status).eql(404);
})
//////////////////////////POST//////////////

test("the  post user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/users",
        method:"POST",
        body:{
            "name": "mohamed",
            "job": "leader"
        }
    });
    

    await t.expect(result.status).eql(201);
    await t.expect(result.body.name).eql("mohamed");
    console.log(result.body);
})
//////////////////////////////////////
test("the  register user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/register",
        method:"POST",
        body:{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });
    

    await t.expect(result.status).eql(200);
    await t.expect(result.body.token).eql("QpwL5tke4Pnpja7X4");
    console.log(result.body);
})
//////////////////////////////////

test("the error register user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/register",
        method:"POST",
        body:{
            "email": "sydney@fife"
        }
    });
    

    await t.expect(result.status).eql(400);
    await t.expect(result.body.error).eql("Missing password");
    console.log(result.body);
})

test("the login user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/login",
        method:"POST",
        body:{
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    });
    

    await t.expect(result.status).eql(200);
    await t.expect(result.body.token).eql("QpwL5tke4Pnpja7X4");
    console.log(result.body);
})







test("the error login user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/login",
        method:"POST",
        body:{
            "email": "peter@klaven"
        }
    });
    

    await t.expect(result.status).eql(400);
    await t.expect(result.body.error).eql("Missing password");
    console.log(result.body);
})

////////////////////////////////PUT////////////////////////////
test("the  update user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/users/2",
        method:"PUT",
        body:{
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    

    await t.expect(result.status).eql(200);
    await t.expect(result.body.name).eql("morpheus");
    console.log(result.body);
})

//////////////////////////DELETE///////////////////////

test("the delete user api",async (t)=>{
    const result=await t.request({
        url:"https://reqres.in/api/users/2",
        method:"DELETE",
       
    });
    

    await t.expect(result.status).eql(204);
    
})


















