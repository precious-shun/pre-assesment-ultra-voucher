SELECT 
    child.id AS child_id,
    child.name AS child_name,
    parent.name AS parent_name
FROM 
    people AS child
LEFT JOIN 
    people AS parent
ON 
    child.parent_id = parent.id;