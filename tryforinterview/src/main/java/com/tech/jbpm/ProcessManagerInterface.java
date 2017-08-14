package com.tech.jbpm;

import java.util.List;



public interface ProcessManagerInterface {
	public List<TaskBean> listUsersTaskName(String url,String deploymentId,long id,String userRole, String action);
}
