import request from "@/utils/request";

export const login = (data) => {
    //返回一个promise对象
  return request({
    url: "/api/admin/employee/login",
    method: "post",
    data,
  });
};