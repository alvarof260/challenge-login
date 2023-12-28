export default class UserRepository {
  constructor (dao) {
    this.dao = dao
  }

  getAll = async () => await this.dao.getUsers()
  getById = async (id) => await this.dao.getById(id)
  create = async (data) => await this.dao.create(data)
  update = async (id, data) => await this.dao.update(id, data)
  delete = async (id) => await this.dao.delete(id)
  findOne = async (data) => await this.dao.findOne(data)
}
