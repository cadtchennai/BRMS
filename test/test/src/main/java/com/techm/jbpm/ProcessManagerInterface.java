package com.techm.jbpm;

import java.util.List;

import org.kie.api.task.model.TaskSummary;

public interface ProcessManagerInterface {

	//public List<TaskBean> updateJBPMProcess(String url,String deploymentId,long id,String userRole, String action);
	public List<TaskBean> listUsersTaskName(String url,String deploymentId,long id,String userRole, String action);
}
