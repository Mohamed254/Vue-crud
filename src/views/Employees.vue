<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Employees
          <button
            class="btn btn-primary float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Employee
          </button>
        </h4>
      </div>

      <div class="raw">
        <ul
                class="alert alert-danger"
                v-if="Object.keys(this.errorList).length > 0"
              >
                <li
                  class="mb-0 ms-3"
                  v-for="(error, index) in errorList"
                  :key="index"
                >
                  {{ error[0] }}
                </li>
              </ul>
              

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Employee
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="resetModel"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >FullName</label
                    >
                    <input
                      v-model="model.employee.name"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Gender</label
                    >
                    <input
                      v-model="model.employee.gender"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Date Of Birth</label
                    >
                    <input
                      v-model="model.employee.dateofbirth"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >City</label
                    >
                    <input
                      v-model="model.employee.city"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Address</label
                    >
                    <input
                      v-model="model.employee.address"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Phone</label
                    >
                    <input
                      v-model="model.employee.phone"
                      class="form-control"
                      type="text"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Email Address</label
                    >
                    <input
                      type="email"
                      v-model="model.employee.email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      @click="resetModel"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      data-bs-toggle="modal"
                      data-bs-target="#show_error_modal"
                      @click.prevent="saveEmployee"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="editModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Edit Employee
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="resetModel"
                ></button>
              </div>
              <div class="modal-body">
                <ul
                  class="alert alert-warning"
                  v-if="Object.keys(this.errorList).length > 0"
                >
                  <li
                    class="mb-0 ms-3"
                    v-for="(error, index) in errorList"
                    :key="index"
                  >
                    {{ error[0] }}
                  </li>
                </ul>
                <form>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >FullName</label
                    >
                    <input
                      v-model="model.employee.name"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Gender</label
                    >
                    <input
                      v-model="model.employee.gender"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Date Of Birth</label
                    >
                    <input
                      v-model="model.employee.dateofbirth"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >City</label
                    >
                    <input
                      v-model="model.employee.city"
                      class="form-control"
                      type="text"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Address</label
                    >
                    <input
                      v-model="model.employee.address"
                      class="form-control"
                      type="text"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Phone</label
                    >
                    <input
                      v-model="model.employee.phone"
                      class="form-control"
                      type="text"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                      >Email Address</label
                    >
                    <input
                      type="email"
                      v-model="model.employee.email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="resetModel"
                >
                  Close
                </button>
                <button
                  type="button"
                  
                  @click.prevent="updateEmployee"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="viewModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  View Employee
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="resetviewModel"
                ></button>
              </div>
              <div class="modal-body">
                <table class="table table-boardered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>FullName</th>

                      <th>Phone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody v-if="this.view_employee.length > 0">
                    <tr
                      v-for="(employee, index) in this.view_employee"
                      :key="index"
                    >
                      <td>{{ employee.id }}</td>
                      <td>{{ employee.name }}</td>

                      <td>{{ employee.phone }}</td>
                      <td>{{ employee.email }}</td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="9">Loading...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  @click="resetviewModel"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-bod">
        <table class="table table-boardered">
          <thead>
            <tr>
              <th>ID</th>
              <th>FullName</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>City</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="this.employees.length > 0">
            <tr v-for="(employee, index) in this.employees" :key="index">
              <td>{{ employee.id }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.gender }}</td>
              <td>{{ employee.dateofbirth }}</td>
              <td>{{ employee.city }}</td>
              <td>{{ employee.address }}</td>
              <td>{{ employee.phone }}</td>
              <td>{{ employee.email }}</td>

              <td>
                <button
                  class="btn btn-success"
                  style="margin-left: 5px"
                  @click="editEmployee(employee)"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="btn btn-danger"
                  style="margin-left: 5px"
                  @click="deleteEmployee(employee.id)"
                >
                  Delete
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  style="margin-left: 5px"
                  @click="viewEmployee(employee)"
                  data-bs-toggle="modal"
                  data-bs-target="#viewModal"
                >
                  View
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="9">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

  <script>
import axios from "axios";

export default {
  name: "employees",

  data() {
    return {
      employees: [],
      // employeeedit: [],
      myModal: null,
      // showModal: false,
      // errorList: "",
      errorList: {},
      view_employee: [],
      show_error_modal: true,

      // employeeId: '',

      model: {
        employee: {
          id: "",
          name: "",
          gender: "",
          dateofbirth: "",
          city: "",
          address: "",
          phone: "",
          email: "",
        },
      },
    };
  },

  mounted() {
    this.getEmployees();

    // this.employeeId = this.$route.params.id;
    // this.editEmployee(this.$route.params.id);
    // console.log('I am here')
  },
  methods: {
    getEmployees() {
      axios.get("http://localhost:8000/api/employees").then((res) => {
        this.employees = res.data.employees;
      });
    },

    editEmployee(employee) {
      this.model.employee = {
        name: "",
        gender: "",
        dateofbirth: "",
        city: "",
        address: "",
        phone: "",
        email: "",
      };

      // this.employee.reset();
      // this.model.fill(employee);
      axios
        .get(`http://localhost:8000/api/employees/${employee.id}/edit`)
        .then((res) => {
          console.log(res.data.employee);

          this.model.employee = res.data.employee;
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },

    resetModel() {
      // Reset the form data to its initial state

      this.model.employee = {
        name: "",
        gender: "",
        dateofbirth: "",
        city: "",
        address: "",
        phone: "",
        email: "",
      };

      // Reset other form fields as needed
    },

    resetviewModel() {
      // Reset the form data to its initial state

      this.view_employee = [];

      // this.view_employeee,map((employee) => {
      //   employee.name = "",
      //   employee.gender="",
      //   employee.dateofbirth= "",
      //   employee.city= "",
      //   employee.address= "",
      //   employee.phone= "",
      //   employee.email= ""
      // });

      // Reset other form fields as needed
    },

    // removeData() {
    //   localStorage.removeItem("employee");
    //   this.localstoreData = localStorage.getItem("employee");
    // },

    viewEmployee(employee) {
      axios
        .get(`http://localhost:8000/api/employees/${employee.id}/edit`)
        .then((res) => {
          if (res.data.employee) {
            this.view_employee = [];

            this.view_employee.push(res.data.employee);
          } else {
            this.view_employee = [];
          }

          console.log(this.view_employee.length);

          // this.hideModal
          // this.myModal.hide();
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },

    // getEmployeeData(employeeId) {
    //   axios.get(`http://localhost:8000/api/employees/${employeeId}/edit`).then(res=> {
    //     console.log(res.data)
    //   });
    // },

    // openModal() {
    //   this.showModal = true;
    // },
    // closeModal() {
    //   this.showModal = false;
    // },
    // toggleModal() {
    //     this.modalShown = !this.modalShown;
    // },

    //mymodal
    showModal() {
      this.myModal = new bootstrap.Modal(
        document.getElementById("exampleModal"),
        {}
      );
      this.myModal.show();
    },

    //mymodal
    // hideModal() {
    //   this.myModal = new bootstrap.Modal(
    //     document.getElementById("exampleModal"),
    //     {}
    //   );
    //   this.myModal.hide();
    // },
    hideErrorModal() {
      this.show_error_modal = false;
    },

    dissmissModal() {
      this.errorList = {};
      // if (Object.keys(this.errorList).length > 0) {
      //   this.errorList = {};
      // } else {
      //   this.saveEmployee();
      //   // this.myModal.hide();
      // }
    },

    alertError() {
      let alerts = alert;
      alerts.this.errorList();
    },

    saveEmployee() {
      var mythis = this;

      axios
        .post("http://localhost:8000/api/employees", this.model.employee)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);

          if (res.data.message) {
            this.model.employee = {
              name: "",
              gender: "",
              dateofbirth: "",
              city: "",
              address: "",
              phone: "",
              email: "",
            };

            this.getEmployees();
            this.dissmissModal();
           
          }
        })

        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              // show_error_modal = true,
              mythis.errorList = error.response.data.errors;
              console.log("errorerror ", mythis.errorList);
              console.log("show response", error.response);
              this.$toaster.error(mythis.errorList);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          }
        });
    },

    //Update

    updateEmployee() {
      console.log("this.model.employee", this.model.employee);

      var mythis = this;
      let employee = this.model.employee;

      axios
        .put(
          `http://localhost:8000/api/employees/${employee.id}/edit`,
          employee
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.message) {
            employee = {
              name: "",
              gender: "",
              dateofbirth: "",
              city: "",
              address: "",
              phone: "",
              email: "",
            };
            alert(res.data.message);
            this.getEmployees();
          }

          this.errorList = "";
        })

        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              mythis.errorList = error.response.data.errors;
            }
            if (error.response.status === 404) {
              alert(error.response.data.message);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          }
        });
    },

    //delete
    deleteEmployee(employeeId) {
      if (confirm("Are you sure, you want to delete this data?")) {
        axios
          .delete(`http://localhost:8000/api/employees/${employeeId}/delete`)
          .then((res) => {
            if (res.data.message) {
              this.model.employee = {
                name: "",
                gender: "",
                dateofbirth: "",
                city: "",
                address: "",
                phone: "",
                email: "",
              };

              this.getEmployees();
            }
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status === 404) {
                alert(error.response.data.message);
              }
            }
          });
      }
    },
  },
};
</script>
  
