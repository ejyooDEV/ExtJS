<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespace="true"%>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.Statement" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.ResultSet" %>
<%@ page import="java.sql.SQLException" %>
<%
  String strReturn="";
  String strMsg="";
  String strResult="";
  String strSuccess="false";
  
  String url 	= "jdbc:oracle:thin:@192.168.43.174:1521:xe";
  String id	= "JSP";
  String pw	= "JSP";
  String JDBC_DRIVER = "oracle.jdbc.driver.OracleDriver";
  
  Connection conn = null;
  Statement stmt = null;
  ResultSet rs = null;
  try{
	  conn = DriverManager.getConnection (url,id,pw);
	  request.setCharacterEncoding("utf-8");
	  String userId = request.getParameter("userId");
	  String password= request.getParameter("password");
	  String nickName = request.getParameter("nickName");
	  String email = request.getParameter("email");
	  
	  stmt = conn.createStatement();
	  String sql = "select userid from userTable where userid='"+userId+"'";
	  rs = stmt.executeQuery(sql);
	  StringBuffer tempList = new StringBuffer();
	  int i = 0;
	  if(rs.next()){
		  strMsg = "이미 등록된 아이디가 있습니다.";
		  throw new Exception();
	  }else{
		  String sqlInsert = "insert into userTable(userid, password, nickname, email) values('"+userId+"','"+password+"','"+nickName+"','"+email+"')";
		  stmt.execute(sqlInsert);
	  }
	  strSuccess="true";
	  strMsg="등록했습니다.";
  }catch(Exception ex){
	  if(strMsg.trim().length()==0){
		  strMsg = ex.toString();
	  }
  }
  finally{
	  try{rs.close();}catch(Exception exRs){}
	  try{stmt.close();}catch(Exception exStmt){}
	  try{conn.close();}catch(Exception exConn){}
  }
  strReturn = "{'success':"+strSuccess+",'data':'"+strResult+"','msg':'"+strMsg+"'}";
  out.println(strReturn.replace("\\","\\").trim());
%>