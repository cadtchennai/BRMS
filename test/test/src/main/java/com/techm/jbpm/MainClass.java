/*package com.sample;

	import java.net.URL;
	import java.util.HashMap;
	import java.util.List;
	import java.util.Map;

	import org.kie.api.runtime.KieSession;
	import org.kie.api.runtime.manager.RuntimeEngine;
	import org.kie.api.runtime.process.ProcessInstance;
	import org.kie.api.task.TaskService;
	import org.kie.api.task.model.TaskSummary;
	import org.kie.remote.client.api.RemoteRuntimeEngineFactory;


	public class MainClass {

		public static void main(String[] args) throws Exception {
			
			System.out.println("inside the main class");
			RuntimeEngine engine = RemoteRuntimeEngineFactory.newRestBuilder()
				.addUrl(new URL("http://localhost:8080/business-central"))
				.addUserName("bpmsAdmin").addPassword("password@1")
				.addDeploymentId("drools:Evaluation:1.0")
					.build();
			KieSession ksession = engine.getKieSession();
			TaskService taskService = engine.getTaskService();

			
			IF (user == bpmns)
			{
			// start a new process instance
			Map<String, Object> params = new HashMap<String, Object>();
			params.put("employee", "priya");
			params.put("reason", "Yearly performance evaluation");
			ProcessInstance processInstance = 
				ksession.startProcess("evaluation", params);
			System.out.println("Start Evaluation process"+processInstance.getId());
			
			List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("bmpms", "en-UK");
			TaskSummary task = findTask(tasks, processInstance.getId());
			
			if the user bpms and click start
			{
			System.out.println("'priya' completing task " + task.getName() + ": " + task.getDescription());
			taskService.start(task.getId(), "priya");
			}
			
			if the user bpms and click complete
			{
			
			Map<String, Object> results = new HashMap<String, Object>();
			results.put("performance", "exceeding");
			taskService.complete(task.getId(), "priya", results);
			}
			
			if the user SE
			{
				List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("SE", "en-UK");
				TaskSummary task = findTask(tasks, processInstance.getId());
			}
			
			
			if the user SE and click start
			{
			System.out.println("'priya' completing task " + task.getName() + ": " + task.getDescription());
			taskService.start(task.getId(), "priya");
			}
			
			if the user SE and click complete
			{
			
			Map<String, Object> results = new HashMap<String, Object>();
			results.put("performance", "exceeding");
			taskService.complete(task.getId(), "priya", results);
			}
			
			// complete Self Evaluation
			List<TaskSummary> tasks = taskService.getTasksAssignedAsPotentialOwner("priya", "en-UK");
			TaskSummary task = findTask(tasks, processInstance.getId());
			System.out.println("'priya' completing task " + task.getName() + ": " + task.getDescription());
			taskService.start(task.getId(), "priya");
			Map<String, Object> results = new HashMap<String, Object>();
			results.put("performance", "exceeding");
			taskService.complete(task.getId(), "priya", results);

			
			
			// john from HR
			engine = RemoteRuntimeEngineFactory.newRestBuilder()
				.addUrl(new URL("http://localhost:8080/business-central"))
				.addUserName("john").addPassword("password@1")
				.addDeploymentId("org.jbpm:evaluation:1.0")
					.build();
			ksession = engine.getKieSession();
			taskService = engine.getTaskService();
			
			tasks = taskService.getTasksAssignedAsPotentialOwner("john", "en-UK");
			task = findTask(tasks, processInstance.getId());
			System.out.println("'john' completing task " + task.getName() + ": " + task.getDescription());
			taskService.claim(task.getId(), "john");
			taskService.start(task.getId(), "john");
			results = new HashMap<String, Object>();
			results.put("performance", "acceptable");
			taskService.complete(task.getId(), "john", results);
			
			
			
			
			// mary from PM
			engine = RemoteRuntimeEngineFactory.newRestBuilder()
				.addUrl(new URL("http://localhost:8080/business-central"))
				.addUserName("mary").addPassword("password@1")
				.addDeploymentId("org.jbpm:evaluation:1.0")
					.build();
			ksession = engine.getKieSession();
			taskService = engine.getTaskService();

			tasks = taskService.getTasksAssignedAsPotentialOwner("mary", "en-UK");
			task = findTask(tasks, processInstance.getId());
			System.out.println("'mary' completing task " + task.getName() + ": " + task.getDescription());
			taskService.claim(task.getId(), "mary");
			taskService.start(task.getId(), "mary");
			results = new HashMap<String, Object>();
			results.put("performance", "outstanding");
			taskService.complete(task.getId(), "mary", results);
			
			System.out.println("Process instance completed");
		}
		
		
		
		private static TaskSummary findTask(List<TaskSummary> tasks, long processInstanceId) {
			for (TaskSummary task: tasks) {
				if (task.getProcessInstanceId() == processInstanceId) {
					return task;
				}
			}
			throw new RuntimeException("Could not find task for process instance "
				+ processInstanceId + " [" + tasks.size() + " task(s) in total]");
		}
		
	
}
*/