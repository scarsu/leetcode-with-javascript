# Write your MySQL query statement below
select
    a.name Employee
from
    employee a,
    employee b
where
    a.managerId=b.id
    and
        a.salary>b.salary