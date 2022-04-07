/**
 * Wraps Controllers for easy import from other modules
 */
import { Repository } from "typeorm";
import { Employee } from "../entities/Employee";
import { DepartmentRepository } from "../repository/DepartmentRepository";
import { EmployeeRepository } from "../repository/EmployeeRepository";
import { ProjectRepository } from "../repository/ProjectRepository";
import { DepartmentService } from "../services/DepartmentService";
import { EmployeeService } from "../services/EmployeeService";
import { ProjectService } from "../services/ProjectService";
import DepartmentController from "./DepartmentController";
import EmployeeController from "./EmployeeController";
import HealthController from "./HealthController";
import ProjectController from "./ProjectController";

// const employee = new Employee();
const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);

const departmentRepository = new DepartmentRepository();
const departmentService = new DepartmentService(departmentRepository);

const projectRepository = new ProjectRepository();
const projectServce = new ProjectService(projectRepository);

export default [
  new HealthController(),
  new EmployeeController(employeeService),
  new DepartmentController(departmentService),
  new ProjectController(projectServce)
];
