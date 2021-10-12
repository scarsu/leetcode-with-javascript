# group by 和 临时表
# select
#     email
# from (
#         select email,count(email) num
#         from person
#         group by email
#     ) tmp
# where num>1

# having子句
select email
from person
group by email
having count(email)>1