<template>
  <div class="page w-full p-8">
    <div class="flex align-center justify-between bg-slate-200 p-8 rounded-lg">
      <a href="#new_property" @click="addNew" class="modal_button"> إضافة</a>
      <input type="text" name="search">
    </div>
    <div class="py-8">
      <h3 class="text-lg"> الرواتب</h3>
      <div class="data" role="region" tabindex="0">
        <table class="border-r table-auto">
          <thead class="text-sm">
            <tr>
              <th class="w-12">#</th>
              <th class="">اسم الموظف</th>
              <th class="w-32">القيمة</th>
              <th class="">وصف</th>
              <th class="">تاريخ الصرف</th>
              <th class="">ملاحظات</th>
              <th class="w-32 text-center">...</th>
            </tr>
          </thead>
          <tbody v-if="salaries.length > 0">
            <tr v-for="(item, index) in salaries" :key="item.id" class="text-xs">
              <td>{{ index + 1 }}</td>
              <td>{{ item.employee.name }}</td>
              <td>{{ item.amout }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.notes }}</td>
              <td class="flex gap-2 justify-center">
                <button>تأجير</button>
                <button>بيع</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->

    <div id="new_property" class="modal">
      <div class="modal__content">
        <div class="wrapper">
          <!-- <img src="../assets/paper-plane2.png" alt=""> -->
          <div class="modal_header">
            <h3>إدخل صرف راتب </h3>
          </div>
          <div class="form">
            <h4>بيانات الراتب</h4>
            <div class="form-group">
              <div class="input-group">
                <label for="properity">اسم الموظف</label>
                <v-select class="select" v-model="selectedEmployee" :options="employees"></v-select>
              </div>
              <div class="input-group">
                <label for="type">نوع </label>
                <select name="type" v-model="selectedType">
                  <option value="راتب">راتب</option>
                  <option value="سلفة">سلفة</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div class="input-group">
                <label for="address">القيمة</label>
                <input type="number" name="amoun" v-model="amount" required>
              </div>
              <div class="input-group">
                <label for="address">تاريخ</label>
                <input type="date" name="date" v-model="expense_date">
              </div>
            </div>
          </div>
          <div class="form">
            <!-- <h4>عام</h4> -->
            <div class="form-group">
              <div class="input-group notes">
                <label for="notes">ملاحظات</label>
                <textarea name="notes" v-model="notes" cols="30" rows="8"></textarea>
              </div>
            </div>
          </div>
          <div class="modal__footer">
            <a><button @click="addEmployee" class="send-btn" role="button">إضافة</button></a>
            <a href="#" class="finish" hidden></a>
          </div>
          <a href="#" @click="closeModal" class="modal__close">&times;</a>
        </div>
      </div>
    </div>

    <!-- End Modal -->

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const selectedType = ref(null)
const amount = ref(null)
const expense_date = ref(null)
const notes = ref(null)
const selectedEmployee = ref(null)

const employees = ref([])
const salaries = computed(() => { return store.state.salaries })
// const salaries = ref(store.state.salaries)

    const addNew = () => {
      let body = document.body
      body.classList.add('overflow')
    }
   const closeModal = () => {
      let body = document.body
      body.classList.remove('overflow')
    }

   const addEmployee = () => {
      let data = {
        employee_id: selectedEmployee.value.value,
        type: selectedType.value,
        amout: amount.value,
        notes: notes.value,
        date: expense_date.value
      }
     store.dispatch('addSalary', data).then(() => {
        let body = document.body
        body.classList.remove('overflow')
        document.querySelector('.finish').click()
      }).catch((err) => {
        console.log(err);
      });
    }

const fetchData = async () => {
  if (!store.state.allEmployees) {
    await store.dispatch('allEmployees');
  }
  employees.value = store.state.allEmployees.map((persone) => ({
    label: persone.name,
    value: persone.id,
  }));
};

onMounted(fetchData);

</script>

<style scoped>
.page {
  margin: 8px;
}

.page-header {
  background-color: antiquewhite;
  border: 1px solid rgb(218, 201, 179);
  border-radius: 10px;
  padding: 8px;
}

.modal_button {
  text-decoration: none;
  color: #fff;
  background-color: #411669;
  border-radius: 10px;
  padding: 8px 12px;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 45%;
}

.notes {
  justify-content: center;
  width: 100%;
}

.notes textarea {
  width: 80%;
}

.form-group {
  display: flex;
}

/* Table */

.data {
  overflow: auto;
  width: 100%;
  padding: 14px;
}

.data table {
  border: 1px solid #dededf;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  font-size: 14px;
  table-layout: auto;
  border-collapse: collapse;
  /* border-spacing: 1px; */
  text-align: right;
}

.data caption {
  caption-side: top;
  text-align: right;
}

.data th {
  border: 1px solid #dededf;
  background-color: #eceff1;
  color: #000000;
  padding: 8px 14px;
}

.data td {
  border: 1px solid #dededf;
  background-color: #ffffff;
  color: #000000;
  padding: 8px 14px;
}

/* Table End */

/* Modal */

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 95%;
  min-width: 65%;
  padding: 8px 12px 12px 12px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin: 10px auto
}

.form h4 {
  padding: 0px 2px 6px 2px;
  margin-bottom: 8px;
}


.form input,
textarea,
select {
  width: 250px;
  padding: 12px;
  margin: 5px 0;
  border: 1px solid #DDDFE1;
  border-radius: 3px;
  box-sizing: border-box;
  resize: none;
  font-family: 'NotoKufiArabic', sans-serif;
}

.form span {
  color: #3b3b3b;
}

.wrapper a {
  display: inline-block;
  text-decoration: none;
  padding: 8px 15px;
  background-color: #fff;
  border-radius: 50%;
  text-transform: uppercase;
  color: #585858;

}

.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 5px;
  position: relative;
  width: 85%;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}

.modal_header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px auto;
}

.modal_header img {
  height: 90px;
  width: 90px;
  object-fit: cover;
  /* margin-inline: 20px; */
}

.modal__footer {
  text-align: right;

  a {
    color: #585858;
  }

  i {
    color: #d02d2c;
  }
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
  font-size: 30px;
}

.send-btn {
  width: 140px;
  height: 35px;
  padding: 4px 12px;
  border: none;
  background-color: #268f44;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'NotoKufiArabic', sans-serif;
}

.send-btn:hover {
  background-color: #1c6831;

}

/* End Modal */
</style>