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
