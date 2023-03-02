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

------ INNER JOIN ------
SELECT OwnerID, Pets.PetID, [Name], Kind, Gender, Age, ProcedureDate, ProcedureType, ProcedureSubCode
FROM Pets 
INNER JOIN ProceduresHistory AS History
ON Pets.Petid = History.PetID
ORDER BY OwnerID

------ FULL OUTER JOIN ------
SELECT OwnerID, Pets.PetID, [Name], Kind, Gender, Age, ProcedureDate, ProcedureType, ProcedureSubCode
FROM Pets 
FULL OUTER JOIN ProceduresHistory AS History
ON Pets.Petid = History.PetID
WHERE
	OwnerId IS NOT NULL AND
	ProcedureDate IS NOT NULL AND
	ProcedureType IS NOT NULL AND
	ProcedureSubCode IS NOT NULL
ORDER BY OwnerID

------ COMPLEX JOIN ------
SELECT
	P.PetID,
	P.[Name],
	P.Kind,
	P.Gender,
	P.Age,
	P.OwnerID,
	PH.ProcedureDate,
	PH.ProcedureType,
	PH.ProcedureSubCode,
	PD.[Description],
	PD.Price
FROM Pets P
INNER JOIN ProceduresHistory PH ON
	P.PetID = PH.PetID
	LEFT JOIN ProceduresDetails as PD ON
		PH.ProcedureType = PD.ProcedureType AND
		PH.ProcedureSubCode = PD.ProcedureSubCode

------ CROSS JOIN ------
SELECT *
FROM Pets
CROSS JOIN Owners
