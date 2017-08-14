package com.tech.jbpm;

import java.net.URL;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;

import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.manager.RuntimeEngine;
import org.kie.api.runtime.process.ProcessInstance;
import org.kie.api.task.TaskService;
import org.kie.api.task.model.TaskSummary;
import org.kie.remote.client.api.RemoteRuntimeEngineFactory;

import com.tech.jbpm.ProcessManagerInterface;
import com.tech.jbpm.TaskBean;

public class ProcessManager implements ProcessManagerInterface{
	
public long createJBPMProcess(String url,String deploymentId,long id,String userRole, String action){
				
			
			try{
				if (userRole.equals("bpmsAdmin") && action.equals("Login")) {
					
				RuntimeEngine engine = RemoteRuntimeEngineFactory
						.newRestBuilder().addUrl(new URL(url))
						.addUserName("bpmsAdmin").addPassword("password@1")
						.addDeploymentId(deploymentId).build();
				KieSession ksession = engine.getKieSession();
		
				Map<String, Object> params = new HashMap<String, Object>();
				params.put("action", "Login");
				ProcessInstance processInstance = ksession.startProcess("tryforinterview.InterviewProcess",params );
		        // get the process instance id to find the task
				
				
				id = processInstance.getId();
				
				
				}
		}catch(Exception e){
	    	System.out.println("inside the catch method in create jbpm process");
	      	e.printStackTrace();
		}
			
		       return id;

	}
public List<TaskBean> listUsersTaskName(String url,String deploymentId,long id,String userRole, String action){
List<TaskBean> li=new LinkedList<TaskBean>();	
try{
if ((userRole.equals("bpmsAdmin") && action.equals("Login"))||(userRole.equals("Manager") && action.equals("Reject")) ||
						(userRole.equals("Manager") && action.equals("Left"))||(userRole.equals("bpmsAdmin") && action.equals("Deny")))
{
RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
		    				.addUrl(new URL(url))
		    				.addUserName("bpmsAdmin").addPassword("password@1")
		    				.addDeploymentId(deploymentId)
		    					.build();
TaskService taskService = engine.getTaskService();
List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("bpmsAdmin", "en-UK");
tasks.size();
TaskBean tb1=new TaskBean();
tb1.setSize(tasks.size());
for(TaskSummary task:tasks){
	//if(task.getName().equals("SUBMIT RESUME")){	        		
TaskBean tb=new TaskBean();
tb.setSize(tb1.getSize());
tb.setTaskId(task.getId());
tb.setTaskName(task.getName());
tb.setProcessInstanceId(task.getProcessInstanceId());
li.add(tb);
//}
}
}
if ((userRole.equals("bpmsAdmin") && action.equals("Submit")))
{				
System.out.println("Bpms Admin Submit");
RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
								.addUrl(new URL(url))
								.addUserName("priya").addPassword("password@1")
								.addDeploymentId(deploymentId)
									.build();
TaskService taskService = engine.getTaskService();
List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("priya", "en-UK");
			     
for(TaskSummary task:tasks){
	         if(task.getName().equals("ANALYSE RESUME")){
			        		TaskBean tb=new TaskBean();
			        		tb.setTaskId(task.getId());
			        		tb.setTaskName(task.getName());
			        		tb.setProcessInstanceId(task.getProcessInstanceId());
			        		li.add(tb);
			        		System.out.println("List"+li);
			        	
}

}
}
if ((userRole.equals("Manager") && action.equals("Select"))){
	System.out.println("Manager Click Select");
	RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
								.addUrl(new URL(url))
								.addUserName("priya").addPassword("password@1")
								.addDeploymentId(deploymentId)
									.build();
	TaskService taskService = engine.getTaskService();
	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("priya", "en-UK");
				
for(TaskSummary task:tasks){
			        		if(task.getName().equals("INTERVIEW IN PERSON")){
			        			System.out.println("INTERVIEW IN PERSON IF ");
			        			TaskBean tb=new TaskBean();
				        		tb.setTaskId(task.getId());
				        		tb.setTaskName(task.getName());
				        		tb.setProcessInstanceId(task.getProcessInstanceId());
				        		li.add(tb);
				        		System.out.println("List"+li);
			        		}
			        		
			        	
}

	}
if ((userRole.equals("Manager") && action.equals("Taken") )){
		//||(userRole.equals("Manager") && action.equals("Start"))){
						
	RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
								.addUrl(new URL(url))
								.addUserName("bpmsAdmin").addPassword("password@1")
								.addDeploymentId(deploymentId)
									.build();
	TaskService taskService = engine.getTaskService();
	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("bpmsAdmin", "en-UK");
				
			        	
for(TaskSummary task:tasks){
			        		if(task.getName().equals("REVIEWOFFER")){
			        			TaskBean tb=new TaskBean();
				        		tb.setTaskId(task.getId());
				        		tb.setTaskName(task.getName());
				        		tb.setProcessInstanceId(task.getProcessInstanceId());
				        		li.add(tb);
			        		}
			        		
	}

}
if ((userRole.equals("bpmsAdmin") && action.equals("Accept") )){
						
						RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
								.addUrl(new URL(url))
								.addUserName("bpmsAdmin").addPassword("password@1")
								.addDeploymentId(deploymentId)
									.build();
			        	TaskService taskService = engine.getTaskService();
			        	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("bpmsAdmin", "en-UK");
				
			        	
			        	for(TaskSummary task:tasks){
			        		
			        			TaskBean tb=new TaskBean();
				        		tb.setTaskId(task.getId());
				        		tb.setTaskName(task.getName());
				        		tb.setProcessInstanceId(task.getProcessInstanceId());
				        		li.add(tb);
			        		
			        	
			        	}
		        	}
		        	
			}catch(Exception e){
		    	System.out.println("EXCEPTION CAUGHT IN CREATE JBPM PROCESS");
	          	e.printStackTrace();	
	    }finally
	    {
	    	 System.out.println("Finally OF CREATE JBPM PROCESS");
	    }
return li;
	    	}
	    

					
public void updateJBPMProcess(String url,String deploymentId,long id,String userRole, String action){
		        	
try{
		        			
 if (userRole.equals("bpmsAdmin")) 
		        			 
{
		        				
RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
		        	    				.addUrl(new URL(url))
		        	    				.addUserName("bpmsAdmin").addPassword("password@1")
		        	    				.addDeploymentId(deploymentId)
		        	    					.build();
TaskService taskService = engine.getTaskService();
		        	        	
		        	        	
List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("bpmsAdmin", "en-UK");
		        	        	
		        	       
System.out.println("Inside Complete Function Tasks size" +tasks.size());
TaskSummary task = findTask(tasks,  id);
		        				
System.out.println("'CTM' completing task " + task.getName() + ": " + task.getDescription());
System.out.println("Task id="+task.getId());
System.out.println("Task Name="+task.getName());
System.out.println("Task Description="+task.getDescription());
System.out.println("Task Owner id="+task.getActualOwner().getId());
System.out.println("Task Created by id="+task.getCreatedBy().getId());
System.out.println("Task Status id="+task.getStatus());
System.out.println("Task Process session Id="+task.getProcessSessionId());
System.out.println("Task Process instance id="+task.getProcessInstanceId());
		        				
Map<String, Object> results = new HashMap<String, Object>();
		if(action.equals("Submit")) 
		{
			System.out.println("BPMS ADMIN SUBMIT");
			taskService.start(task.getId(), "bpmsAdmin");			
			results.put("out_action",action);
			taskService.complete(task.getId(),"bpmsAdmin",results);
		}
		else if(action.equals("Deny"))
		{
			System.out.println("BPMS ADMIN DENY");
			taskService.start(task.getId(), "bpmsAdmin");			
			results.put("out_action",action);
			taskService.complete(task.getId(), "bpmsAdmin", results);
		}
		else if(action.equals("Accept"))
		{			
			System.out.println("BPMS ADMIN ACCEPT");
			taskService.start(task.getId(), "bpmsAdmin");
		    results.put("out_action",action);
		    taskService.complete(task.getId(), "bpmsAdmin", results);
			
		}
		   
		        			
 }
 else if(userRole.equals("Manager")){
		        		        	
		        			        
RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder().addUrl(new URL(url))
                                                 .addUserName("priya").addPassword("password@1")
		        							     .addDeploymentId(deploymentId)
		        								 .build();
TaskService taskService = engine.getTaskService();
List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("priya", "en-UK");
System.out.println("user role manager");
TaskSummary task = findTask(tasks, id);

/*if(action.equals("Start")){
	taskService.start(task.getId(), "priya");
}*/


Map<String, Object> results = new HashMap<String, Object>();

if(action.equals("Select"))
{   System.out.println("MANAGER SELECT");
	taskService.start(task.getId(),"priya");
	System.out.println("selection task started");
    results.put("out_action",action);
	taskService.complete(task.getId(),"priya",results);
	System.out.println("selection task completed");
}

if(action.equals("Taken")){
	System.out.println("MANAGER TAKEN");
	taskService.start(task.getId(),"priya");
	System.out.println("taken task started");
	results.put("out_action",action);
	taskService.complete(task.getId(),"priya",results);
	System.out.println("taken task completed");
}
if(action.equals("Reject")){
	System.out.println("MANAGER REJECT");
	taskService.start(task.getId(),"priya");				
	results.put("out_action",action);
	taskService.complete(task.getId(),"priya",results);
	
 }
if(action.equals("Left")){
	System.out.println("MANAGER LEFT");
	taskService.start(task.getId(),"priya");				
	results.put("out_action",action);
	taskService.complete(task.getId(),"priya",results);
	
 }
 }
 System.out.println("Task Completed update jbpm process");

}
catch(Exception e){
	System.out.println("inside the catch method in UPDATE jbpm process");
      	e.printStackTrace();	
}
finally {
   System.out.println("Finally  of update jbpm process");

}
	  
}   			


private TaskSummary findTask(List<TaskSummary> tasks, long id) {
		        			for (TaskSummary task: tasks) {
		        				if (task.getProcessInstanceId() == id) {
		        					System.out.println("task for Find process instance "+ id);
		        					return task;
		        				}
		        			}
		        			throw new RuntimeException("Could not find task for process instance "
		        				+ id + " [" + tasks.size() + " task(s) in total]");
		        		}
		        	}