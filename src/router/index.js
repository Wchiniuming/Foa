import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const vendor = () => import ('@/views/vendor/Vendor')
const casedetails = () => import ('@/views/vendor/casedetails/CaseDetails')
const certification = () => import ('@/views/vendor/certification/Certification')
const projectdetails = () => import ('@/views/vendor/projectdetails/ProjectDetails')
const testresult = () => import ('@/views/vendor/testresult/TestResult')

const routes = [
  {
    path: '/',
    redirect: '/vendor'
  },
  {
    path: '/vendor',
    component: vendor,
  },
  {
    path: '/projectdetails/:projectName',
    name: 'projectdetails',
    component: projectdetails
  },
  {
    path: '/casedetails/:projectName',
    name: 'casedt',
    component: casedetails
  },
  {
    path: '/testresult/:projectName',
    name: 'testresult',
    component: testresult
  },
  {
    path: '/certification/:projectName',
    name: 'certification',
    component: certification
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
