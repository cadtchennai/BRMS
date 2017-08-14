package com.techm.drools.util;

import org.apache.commons.codec.binary.Base64;

public class Base64Formater {
	public static String base64Converter(String userId, String password){
	String base64AuthString="";

	String authString = userId + ":" + password;
	System.out.println("auth string: " + authString);
	//byte[] authEncBytes = Base64.encodeBase64(authString.getBytes());
	//String authStringEnc = new String(authEncBytes);
	
	base64AuthString = new String(new Base64().encode(authString.getBytes()));
	System.out.println("Base64 encoded auth string: " + base64AuthString);
	
	return base64AuthString;
	}
	

}
