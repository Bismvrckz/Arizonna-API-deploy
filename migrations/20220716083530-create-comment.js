"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comments", {
      comment_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      post_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "posts",
          key: "post_id",
        },
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_avatar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      commentPhrase: {
        type: Sequelize.STRING(300),
        allowNull: false,
        defaultValue: "",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
