USE PricesOverTime
CREATE TABLE Products
(
	ProductID	INT		NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Name		[NVARCHAR](50)	NOT NULL
);

CREATE TABLE Stores
(
	StoreID		INT		NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Name		[NVARCHAR](50)	NOT NULL
);

CREATE TABLE Prices
(
	ID			INT		NOT NULL IDENTITY(1,1) PRIMARY KEY,
	Amount		DECIMAL	NOT NULL,
	ProductID	INT		NOT NULL REFERENCES Products(ProductID),
	StoreID		INT		NOT NULL REFERENCES Stores(StoreID),

);