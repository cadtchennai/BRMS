package com.tech.jbpm;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.naming.NamingException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tech.jbpm.TaskBean;

import com.tech.jbpm.ProcessManager;

public class RolesAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
	long id;

	public RolesAction() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		try {
			processRequest(request, response);

			System.out.println("Inside doGet method");
		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	protected void processRequest(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException,
			IllegalStateException, SecurityException, NamingException {

		String userRole = request.getParameter("userRole");
		String url = "http://localhost:8080/business-central";
		String deploymentId = "tech:tryforinterview:1.0.5";
		String action = request.getParameter("action");
		System.out.println("Action name is:" + action);
		String processInstanceId = request.getParameter("processInstanceId");

		PrintWriter out = response.getWriter();
		try {
			ProcessManager obj = new ProcessManager();

			if ((processInstanceId != "") && (!(action.equals("Login")))) {

				System.out.println("Process Instance Id:"+ processInstanceId);
				id = Long.parseLong(processInstanceId);
				System.out.println("The ID value is" + id);
			}
			id = obj.createJBPMProcess(url, deploymentId, id, userRole, action);

			System.out.println("Id is" + id);
			System.out.println("DeploymentId is" + deploymentId);
			System.out.println("UserRole is" + userRole);
			System.out.println("Action is" + action);

obj.updateJBPMProcess(url, deploymentId, id, userRole, action);

			if (userRole.equals("bpmsAdmin")) {

				if (action.equals("Login")) {

					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);

					request.setAttribute("BPMSTaskComplete",
							"BpmsAdmin to Submit the Resume to Manager");
					RequestDispatcher rD = request
							.getRequestDispatcher("ResumeSubmission.jsp");
					rD.include(request, response);
				}

				else if (action.equals("Submit")) {

					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);

					request.setAttribute("BPMSTaskComplete",
							"Analysing Resume by Manager:Select/Reject ?");
					RequestDispatcher rD = request
							.getRequestDispatcher("AnalyseResume.jsp");
					rD.include(request, response);
				}
				else if (action.equals("Accept")) {
					
					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					request.setAttribute("BPMSTaskComplete",
							"Congratulations");
					RequestDispatcher rD = request
							.getRequestDispatcher("Success.jsp");
					rD.include(request, response);
				}
				else if(action.equals("Deny"))
				{
					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);

					request.setAttribute("BPMSTaskComplete",
							"Login Again to submit your resume");
					RequestDispatcher rD = request
							.getRequestDispatcher("Login.jsp");
					rD.include(request, response);
				}

				
			}

			else if (userRole.equals("Manager")) {
				/*if(action.equals("Start"))
				{
					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskBeans", listTB);
					request.setAttribute("BPMSTaskComplete",
							"Analysing Resume by Manager:Select/Reject ?");
					RequestDispatcher rD = request
							.getRequestDispatcher("AnalyseResume.jsp");
					rD.forward(request, response);
				}*/
				if (action.equals("Select")) {
					System.out.println("manager select");
					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					request.setAttribute("BPMSTaskComplete",
							"Selected! Personal interview result by manager Taken or Left ? ");
					RequestDispatcher rD = request
							.getRequestDispatcher("InterviewProcess.jsp");
					rD.forward(request, response);
				}
				
				else if (action.equals("Reject")) {

					//System.out.println("Inside SE Reject");
					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					request.setAttribute(
							"BPMSTaskComplete",
							"You are rejected! Submit your resume again!");
					RequestDispatcher rD = request
							.getRequestDispatcher("ResumeSubmission.jsp");
					rD.forward(request, response);
				}
				else if (action.equals("Taken")) {
					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					request.setAttribute("BPMSTaskComplete",
							"Selected! Review your own offer! ");
					RequestDispatcher rD = request
							.getRequestDispatcher("ReviewOffer.jsp");
					rD.forward(request, response);
				}
				else if (action.equals("Left")) {

					System.out.println("Inside SE Reject");
					List<TaskBean> listTB = obj.listUsersTaskName(url,
							deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					request.setAttribute(
							"BPMSTaskComplete",
							"Sorry! Better luck next time");
					RequestDispatcher rD = request
							.getRequestDispatcher("ResumeSubmission.jsp");
					rD.forward(request, response);
				}
				
			}

			System.out.println("Task Completed");
		} 
		catch (Exception e) {
			System.out.println("inside the catch  servlet login method");
			e.printStackTrace();
		} 
		finally {
			out.close();

		}
	}
}
