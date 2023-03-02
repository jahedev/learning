SELECT
	*,
	DATEDIFF(MONTH, [first_retail_availability], [discontinued]) AS months_existed
FROM dbo.Console_Dates
WHERE datepart(MONTH, [first_retail_availability]) - 11 = 0 -- 11th month
ORDER BY months_existed DESC