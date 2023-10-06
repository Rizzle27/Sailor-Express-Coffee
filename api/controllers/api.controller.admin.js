import * as service from "../../services/service.admin.js";
import * as view from "../../views/view.admin.js"

const getUsers = (req, res) => {
    service.getUsers()
      .then((users) => {
        res.send(view.createUsersListPage(users))
      });
  };

export { getUsers }