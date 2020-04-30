const db = require("../data/config")

function find() {
  return db("schemes")
}

function findById(id) {
  return db("schemes")
  .where({ id })
  .first()
}

function findSteps(scheme_id) {
  return db("steps")
  .join("schemes", "schemes.id", "steps.scheme_id")
  .select("steps.id", "schemes.scheme_name", "steps.instructions")
  .where({ scheme_id })
}

function add(newScheme) {
  return db("schemes")
  .insert(newScheme)
}

function update(changes, id) {
  return db("schemes")
  .where({ id })
  .update(changes)
}

function remove(id) {
  return db("schemes")
  .where({ id })
  .del()
}

function addStep(step, scheme_id) {
  return db("steps")
  .join("schemes", "schemes.id", "steps.scheme_id")
  .select("steps.id", "schemes.scheme_name", "steps.instructions")
  .where({ scheme_id })
  .insert(step)
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep,
}