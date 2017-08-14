package com.techm.drools.service;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.techm.drools.util.Base64Formater;

@Path("/base64service")
@RequestScoped
public class Base64Service {

	
	@GET
	@Path("/getAuthCode/{userId}/{password}")
	@Produces({"text/plain"})
	public String getDtProjectDetails(@PathParam("userId") String userId, @PathParam("password") String password){
		String base64AuthCode = "";
		try{
			base64AuthCode = Base64Formater.base64Converter(userId, password);
		}catch(Exception exception){
			System.out.println("Exception >>>>"+exception.getMessage());
		}
		return base64AuthCode;
	}
	
}
