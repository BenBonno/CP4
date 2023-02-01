CREATE TABLE
    `score` (
        `id` int NOT NULL AUTO_INCREMENT,
        `id_user` int NOT NULL,
        `score` int NULL,
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `user` (
        `id` int NOT NULL AUTO_INCREMENT,
        `username` varchar(25) NOT NULL,
        `password` varchar(25) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `userName`(`username`)
    );

ALTER TABLE `score`
ADD
    CONSTRAINT `id_user_score` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE