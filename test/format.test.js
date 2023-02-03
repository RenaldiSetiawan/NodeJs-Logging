import winston from "winston";

test("Logging Format", () => {

    const logger = winston.createLogger({
        level: "invo",
        // format: winston.format.json()  /* -- Defaul Format bawaan -- */
        format: winston.format.simple(),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('Hello Format');
});