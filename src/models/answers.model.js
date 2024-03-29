// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient')
  const answers = sequelizeClient.define(
    'answers',
    {
      id_answer: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      activity_desc: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      minutes_of_meeting: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      todo_list: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      step: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_pipeline: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_question: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_customer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        }
      }
    }
  )

  // eslint-disable-next-line no-unused-vars
  answers.associate = function(models) {
    // Define associations here
    answers.hasMany(models.pipelines, { foreignKey: 'id_pipeline', sourceKey: 'id_pipeline' })
    answers.hasMany(models.customers, { foreignKey: 'id_customer', sourceKey: 'id_customer' })
    answers.hasMany(models.questions, { foreignKey: 'id_question', sourceKey: 'id_question' })
    answers.hasMany(models.users, { foreignKey: 'id', sourceKey: 'id' })
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return answers
}
