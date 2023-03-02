--ALTER TABLE [dbo].[console_games]
--ADD global_sales float

--UPDATE console_games
--SET global_sales = na_sales + [eu_sales] + [jp_sales] + [other_sales]

--ALTER TABLE [dbo].[console_games]
--ADD na_sales_percent float

--UPDATE [dbo].[console_games]
--SET na_sales_percent = round(na_sales / global_sales * 100,2)
--WHERE global_sales > 0

--SELECT *
--FROM console_games
--ORDER BY global_sales DESC
--OFFSET 0 ROWS FETCH FIRST 5 ROWS ONLY

--SELECT game_name, reverse(left(game_name, 5))
--FROM console_games
--ORDER BY game_rank
