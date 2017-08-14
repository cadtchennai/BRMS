package com.techm.jbpm;
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

public class ProcessManager implements ProcessManagerInterface {
	public long createJBPMProcess(String url,String deploymentId,long id,String userRole, String action){
			
		
		try{
			if (userRole.equals("bpmsAdmin") && action.equals("Save")) {
				
			RuntimeEngine engine = RemoteRuntimeEngineFactory
					.newRestBuilder().addUrl(new URL(url))
					.addUserName("bpmsAdmin").addPassword("password@1")
					.addDeploymentId(deploymentId).build();
			KieSession ksession = engine.getKieSession();
	
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("ruleType", "ready for review");
			params.put("ruleState", "active");
			params.put("action", "Save");
			ProcessInstance processInstance = ksession.startProcess("whale.NewRuleWorkFlow",params );
	        // get the process instance id to find the task
			
			
			id = processInstance.getId();
			
			//ksession.createProcessInstance("whale.NewRuleWorkFlow",)
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
			
			if ((userRole.equals("bpmsAdmin") && action.equals("Save"))||(userRole.equals("bpmsAdmin") && action.equals("Start")) ||(userRole.equals("SE") && action.equals("Reject"))||(userRole.equals("PE") && action.equals("Cancel")))
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
	        		
	        		TaskBean tb=new TaskBean();
	        		tb.setSize(tb1.getSize());
	        		tb.setTaskId(task.getId());
	        		tb.setTaskName(task.getName());
	        		tb.setProcessInstanceId(task.getProcessInstanceId());
	        		li.add(tb);
	        	
	        	
	        	}
	        	

			}
			
			if ((userRole.equals("bpmsAdmin") && action.equals("Complete") )||(userRole.equals("SE") && action.equals("Start") )||(userRole.equals("PE") && action.equals("Reject"))||(userRole.equals("SENE") && action.equals("Reject")))
			{				
				System.out.println("Inside SE ListTaskService");
				RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
						.addUrl(new URL(url))
						.addUserName("priya").addPassword("password@1")
						.addDeploymentId(deploymentId)
							.build();
	        		TaskService taskService = engine.getTaskService();
	        		List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("priya", "en-UK");
	     
	        	for(TaskSummary task:tasks){
	        		
	        		TaskBean tb=new TaskBean();
	        		tb.setTaskId(task.getId());
	        		tb.setTaskName(task.getName());
	        		tb.setProcessInstanceId(task.getProcessInstanceId());
	        		li.add(tb);
	        	
	        	}

			}
			
			
			if ((userRole.equals("SE") && action.equals("Complete") )||(userRole.equals("PE") && action.equals("Start") )){
				RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
						.addUrl(new URL(url))
						.addUserName("nagomi").addPassword("password@1")
						.addDeploymentId(deploymentId)
							.build();
	        	TaskService taskService = engine.getTaskService();
	        	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("nagomi", "en-UK");
		
	        	
	        	for(TaskSummary task:tasks){
	        		if(task.getName().equals("Provisional/Submitted for Review")){
	        			TaskBean tb=new TaskBean();
		        		tb.setTaskId(task.getId());
		        		tb.setTaskName(task.getName());
		        		tb.setProcessInstanceId(task.getProcessInstanceId());
		        		li.add(tb);
	        		}
	        		
	        	
	        	}

				
			}
			
			if ((userRole.equals("PE") && action.equals("Complete") )){
				
				RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
						.addUrl(new URL(url))
						.addUserName("nagomi").addPassword("password@1")
						.addDeploymentId(deploymentId)
							.build();
	        	TaskService taskService = engine.getTaskService();
	        	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("nagomi", "en-UK");
		
	        	
	        	for(TaskSummary task:tasks){
	        		if(task.getName().equals("Formal/Pre-release")){
	        			TaskBean tb=new TaskBean();
		        		tb.setTaskId(task.getId());
		        		tb.setTaskName(task.getName());
		        		tb.setProcessInstanceId(task.getProcessInstanceId());
		        		li.add(tb);
	        		}
	        		
	        	
	        	}

			}
			
			
			if ((userRole.equals("PE") && action.equals("Submit") )||(userRole.equals("SENE") && action.equals("Start") )){
				
				RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
						.addUrl(new URL(url))
						.addUserName("john").addPassword("password@1")
						.addDeploymentId(deploymentId)
							.build();
	        	TaskService taskService = engine.getTaskService();
	        	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("john", "en-UK");
		
	        	
	        	for(TaskSummary task:tasks){
	        		
	        		TaskBean tb=new TaskBean();
	        		tb.setTaskId(task.getId());
	        		tb.setTaskName(task.getName());
	        		tb.setProcessInstanceId(task.getProcessInstanceId());
	        		li.add(tb);
	        	
	        	}

			}
			
			
		}
			 catch(Exception e){
			    	System.out.println("inside the catch method in create jbpm process");
			          	e.printStackTrace();	
			    }
			    finally {
			       System.out.println("Finally");
			 
			    }
					  return li;
	}
	
	
	public void updateJBPMProcess(String url,String deploymentId,long id,String userRole, String action){
		// TODO Auto-generated method stub
		
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
			if( action.equals("Start")){
				//taskService.claim(task.getId(), "bpmsAdmin");
				taskService.start(task.getId(), "bpmsAdmin");
				
				
			}
			
			if( action.equals("Complete")){
				results.put("out_action", action);
				System.out.println("Inside start Process id "+id);
				taskService.complete(task.getId(), "bpmsAdmin", results);
				System.out.println("Inside Complete Process id "+id);
	
			}
			System.out.println("Process id "+id);
		
        }
	
       
        else if(userRole.equals("SE")){
        	
        
        	RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
					.addUrl(new URL(url))
					.addUserName("priya").addPassword("password@1")
					.addDeploymentId(deploymentId)
						.build();
        		TaskService taskService = engine.getTaskService();
        		List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("priya", "en-UK");
        		TaskSummary task = findTask(tasks, id);
				System.out.println("'SE' completing task " + task.getName() + ": " + task.getDescription());
				
				Map<String, Object> results = new HashMap<String, Object>();
				
				if(action.equals("Start")){
					taskService.start(task.getId(),"priya");
				}
				
				if(action.equals("Complete")){
					results.put("out_action",action);
					taskService.complete(task.getId(),"priya",results);
				}
				
				if(action.equals("Reject")){
				taskService.start(task.getId(),"priya");				
				results.put("out_action",action);
				taskService.complete(task.getId(),"priya",results);
				
			 }
        }
        else if(userRole.equals("PE")){
        	System.out.println("Inside PE method");
        
        	
        	RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
					.addUrl(new URL(url))
					.addUserName("nagomi").addPassword("password@1")
					.addDeploymentId(deploymentId)
						.build();
        	TaskService taskService = engine.getTaskService();
        	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("nagomi", "en-UK");
        	System.out.println("tasks size::"+tasks.size());
        	System.out.println("id"+id);
        	TaskSummary task = findTask(tasks,id);
			//taskService.claim(task.getId(), "nagomi");

			System.out.println("'PE' task " + task.getName() + ": " + task.getDescription());
			
			if(action.equals("Start")){
				taskService.start(task.getId(), "nagomi");
			}
		
			Map<String, Object> results = new HashMap<String, Object>();
			
			if(action.equals("Complete")){
				results.put("out_action",action);
				taskService.complete(task.getId(),"nagomi",results);
			}
			
			if(action.equals("Submit")||action.equals("Reject")||action.equals("Cancel")){
				
				taskService.start(task.getId(), "nagomi");
				
				results.put("out_action",action);
				taskService.complete(task.getId(),"nagomi",results);
			}
			
        }
        
		 
		 
      
		 
        else if(userRole.equals("SENE")){
    		
    	
    	RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
				.addUrl(new URL(url))
				.addUserName("john").addPassword("password@1")
				.addDeploymentId(deploymentId)
					.build();
    	TaskService taskService = engine.getTaskService();
    	List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("john", "en-UK");
    	TaskSummary task = findTask(tasks,id);
		System.out.println("'SENE' task " + task.getName() + ": " + task.getDescription());
		//taskService.claim(task.getId(), "satheesh");
		
		
		if(action.equals("Start")){
			taskService.start(task.getId(), "john");
		}
		
		Map<String, Object> results = new HashMap<String, Object>();
		
		if(action.equals("Complete")){
			results.put("out_action",action);
			taskService.complete(task.getId(), "john", results);
		}
		
		
		if(action.equals("Reject")){
			taskService.start(task.getId(), "john");
			
			results.put("out_action",action);
			taskService.complete(task.getId(), "john", results);
		}
	
    }
		 
       
        System.out.println("Task Completed");
      
    	
    } 
    catch(Exception e){
    	System.out.println("inside the catch method in create jbpm process");
          	e.printStackTrace();	
    }
    finally {
       System.out.println("Finally");
 
    }
		 // return li;
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