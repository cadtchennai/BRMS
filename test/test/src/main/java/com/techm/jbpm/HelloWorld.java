package com.techm.jbpm;



import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.util.List;

import javax.naming.NamingException;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.kie.api.runtime.manager.RuntimeEngine;
import org.kie.api.task.TaskService;
import org.kie.api.task.model.TaskSummary;
import org.kie.remote.client.api.RemoteRuntimeEngineFactory;


public class HelloWorld extends HttpServlet {
	private static final long serialVersionUID = 1L;
	long id;
	
	public HelloWorld() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		//RequestDispatcher rd = request.getRequestDispatcher("hello.jsp");
		//rd.forward(request, response);
		try {
			processRequest(request, response);
    		
    		System.out.println("ASDSDF");
		} catch (Exception e) {

			e.printStackTrace();
		}
    
	}
	
	protected void processRequest(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException,
			IllegalStateException, SecurityException, NamingException {
			
		String userRole = request.getParameter("userRole");
		String url = "http://localhost:9080/business-central";	
		String deploymentId = "techm:Sample:1.0";
		String action = request.getParameter("action");
		System.out.println("action name is:"+action);
		String processInstanceId=request.getParameter("processInstanceId");
		
		
		PrintWriter out = response.getWriter();
		try {
			ProcessManager obj = new ProcessManager();
			
						
			if((processInstanceId!="")&&(!(action.equals("Save")))){
				
				System.out.println("Another Process Instance Id:"+processInstanceId);
				id = Long.parseLong(processInstanceId);
				System.out.println("The ID value is"+id);
			}
			
			id=obj.createJBPMProcess(url, deploymentId,id,userRole,action);
			
			
			
			System.out.println("id is"+id);
			System.out.println("deploymentIdid is"+deploymentId);
			System.out.println("userRole is"+userRole);
			System.out.println("action is"+action);
			
			
			obj.updateJBPMProcess(url, deploymentId, id,userRole,action);
			
			
			if (userRole.equals("bpmsAdmin")){
				
				if(action.equals("Save")){
				
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					
					request.setAttribute("BPMSTaskComplete", "Waiting for BPMSAdmin to Start and Complete the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("BPMSAdminTask.jsp");
					rD.include(request, response);
				}
				
				
				else if(action.equals("Start")) {
					
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					
					request.setAttribute("BPMSTaskComplete", "Waiting for BPMSAdmin to Start and Complete the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("BPMSAdminTask.jsp");
					rD.include(request, response);
				}
					
				else if(action.equals("Complete")) {
					
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskBeans", listTB);
					request.setAttribute("SEApproveReject", "Waiting for SE to Approve or Reject the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("ApproveReject.jsp");
					rD.forward(request, response);
					
				}
			}
			
			
			else if (userRole.equals("SE")) {
				if(action.equals("Start")) {
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskBeans", listTB);
					request.setAttribute("SEApproveReject", "Waiting for SE to Approve or Reject the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("ApproveReject.jsp");
					rD.forward(request, response);
				}
				
				if(action.equals("Complete") ){
					
					System.out.println("inside if PE getTasks");
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskBeans", listTB);
					request.setAttribute("TaskBeansPE", listTB);
					request.setAttribute("PEApproveReject", "Waiting for PE to Approve, Reject or Cancel the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("ApproveReject.jsp");
					rD.include(request, response);
					
				}	
					
				
				else if (action.equals("Reject")) {
					
					System.out.println("Inside SE Reject");
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskSummary", listTB);
					request.setAttribute("BPMSTaskComplete", "Rejected Task from SE Waiting for BPMSAdmin again to Start and Complete the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("BPMSAdminTask.jsp");
					rD.forward(request, response);
				}
			} 
			
			else if (userRole.equals("PE")) {

				if(action.equals("Start")){
					 
					System.out.println("inside if PE getTasks");
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskBeans", listTB);
					request.setAttribute("TaskBeansPE", listTB);
					request.setAttribute("PEApproveReject", "Waiting for PE to Approve, Reject or Cancel the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("ApproveReject.jsp");
					rD.include(request, response);
				 }
				 
				if(action.equals("Complete")){
	 
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
	
					request.setAttribute("TaskBeansPESubmit", listTB);
					request.setAttribute("PESubmit", "Waiting for PE to Submit the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("ApproveReject.jsp");
					rD.forward(request, response); 
				}
 
				 
				 if(action.equals("Approve")){
					 
					 List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					
					 request.setAttribute("TaskBeansPESubmit", listTB);
					 request.setAttribute("PESubmit", "Waiting for PE to Submit the task");
						RequestDispatcher rD = request
								.getRequestDispatcher("ApproveReject.jsp");
						rD.forward(request, response); 
				 }
				 
				 else if(action.equals("Submit")){
					 
					 List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					 request.setAttribute("TaskBeans", listTB);
					 request.setAttribute("SENEApproveReject", "Waiting for SENE to Approve or Reject the task");
						RequestDispatcher rD = request
								.getRequestDispatcher("ApproveReject.jsp");
						rD.forward(request, response);
				 }
				 
				 else if(action.equals("Reject")){
						
						List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
						request.setAttribute("TaskBeans", listTB);
						request.setAttribute("SEApproveReject", "Rejected Task from PE Waiting for SE to Approve or Reject the task");
						RequestDispatcher rD = request
								.getRequestDispatcher("ApproveReject.jsp");
						rD.forward(request, response);
				 }
				 
				 else if (action.equals("Cancel") ) {
					 List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
						request.setAttribute("TaskSummary", listTB);
						
						request.setAttribute("BPMSTaskComplete", "Cancelled task form PE Waiting for BPMSAdmin to Start and Complete the task");
						RequestDispatcher rD = request
								.getRequestDispatcher("BPMSAdminTask.jsp");
						rD.include(request, response);
				}
			} else if (userRole.equals("SENE")) {
				
				

				if(action.equals("Start") ){
					 List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					 request.setAttribute("TaskBeans", listTB);
					 request.setAttribute("SENEApproveReject", "Waiting for SENE to Approve or Reject the task");
						RequestDispatcher rD = request
								.getRequestDispatcher("ApproveReject.jsp");
						rD.forward(request, response);
				}

				if(action.equals("Complete") ){
					request.setAttribute("SENECompleteTask", "Task is Successfully Completed");
					RequestDispatcher rD = request
							.getRequestDispatcher("SENETask.jsp");
					rD.forward(request, response);
				}
								
				if(action.equals("Approve") ){
					request.setAttribute("SENECompleteTask", "Task is Successfully Completed");
					RequestDispatcher rD = request
							.getRequestDispatcher("SENETask.jsp");
					rD.forward(request, response);
				}
				
				if (action.equals("Reject")) {
					List<TaskBean> listTB=obj.listUsersTaskName(url, deploymentId, id, userRole, action);
					request.setAttribute("TaskBeans", listTB);
					request.setAttribute("SEApproveReject", "Rejected task from SENE Waiting for SE to Approve or Reject the task");
					RequestDispatcher rD = request
							.getRequestDispatcher("ApproveReject.jsp");
					rD.forward(request, response);
					
				}
				
				
			} 
			System.out.println("Task Completed");
		} catch (Exception e) {
			System.out.println("inside the catch  servlet login method");
			out.println("Error:" + e.getMessage().toString());
			e.printStackTrace();
		} finally {
			out.close();

		}
	}
	
	
}