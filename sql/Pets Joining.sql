use [pets]
go

--select * from Pets;

--select * from Owners;

------ LEFT JOIN ------
SELECT [Pets].[Name], [Owners].[Name]
FROM [Pets]
LEFT JOIN [Owners]
	ON [Pets].OwnerID = [Owners].OwnerID
ORDER BY [Owners].OwnerID

------ ALIASES FOR TABLES ------
SELECT P.[Name], O.[Name]
FROM [Pets] AS P
LEFT JOIN [Owners] AS O
ON P.[OwnerID] = O.[OwnerID]
WHERE LEFT(P.[Name], 1) = LEFT(O.[Name], 1)

------ ALIAS FOR COLUMN NAME ------
SELECT P.[Name] AS [Pet Name], O.[Name] [Owner Name]
FROM Pets P
LEFT JOIN Owners AS O
ON P.OwnerID = O.OwnerID
WHERE LEFT(P.[Name], 1) = LEFT(O.[Name], 1)

------ RIGHT JOIN ------
SELECT P.[Name] AS [Pet Name], O.[Name] AS [Owner Name]
FROM Owners AS O
RIGHT JOIN PETS AS P
ON P.OwnerID = O.OwnerID
