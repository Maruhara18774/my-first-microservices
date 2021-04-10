module.exports = {
    name: "helper",
    actions: {
        random(){
            return Math.round(Math.random()*10);
        }

    },
    events: {
        "hello.called"(payload){
            this.logger.info("Helper service caught an event!");
            this.logger.info(payload)
        }
    }
}; 