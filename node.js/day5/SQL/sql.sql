-- 通过*把 users 表中所有的数据查询出来
-- select * from users

-- 从users 表中把 username 和 password 对应的数据查询出来
-- select username,password from users

-- 向 users 表中插入新数据
-- insert into users (username,password) values('tony stark','098123')
-- select * from users

-- 将ID为4的用户密码更新为 888888
-- update users set password='888888' where id=4
-- select * from users

-- 更新 ID 为2的用户 把用户密码更新为 admin123 用户的状态更新为 1
-- update users set password='admin123',status='1' where id=2
-- select * from users

-- 删除 users 表中 id为4的用户
-- delete from users where id=4
-- select * from users

-- 演示 where 子句的使用
-- select * from users where status = 1
-- select * from users where id>2
-- select * from users where username<>'ls'
-- select * from users where username!='ls'

-- 使用 and 来显示所有状态为0且Id<3的用户
-- select * from users where status=0 and id<3

-- 使用 OR 来显示所有 status 为 1 或者username 为 zs的用户
-- select * from users where status=1 or username='zs'

-- 对 users 表中的数据 按照status 字段进行升序排序 (desc 降序)
-- select * from users order by status
-- select * from users order by id desc

-- 对 users 表中的数据 先按照status 进行降序 在按照 username 字母的顺序进行升序
-- select * from users order by status desc,username asc

-- 使用 count（*）统计 users 表中状态为0的用户的总数量
-- select count(*) from users where status=0

-- 使用As关键字给列起别名
-- select count(*) as total from users where status=0
-- select username as uname,password as upwd from users