
const app = require("../server")
const request = require("supertest")


describe('接口测试', function () {

    let server = app.listen(3001);

    describe('#test server', () => {
        it('#test GET /list',  (done) => {
            request(server)
            .get('/list')
            .expect('Content-Type', /json/)
            .expect(200, { name: "zhangtian", age: 24 })
            .end(()=>{
            	done()
            	process.exit()
            })
        });
    });
});
