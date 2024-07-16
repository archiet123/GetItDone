-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Task', 'Purchase', 'Reminder');

-- CreateTable
CREATE TABLE "TestTable" (
    "id" TEXT NOT NULL,
    "CompleteBy" TIMESTAMP(3),
    "DateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "TestType" "Type" NOT NULL DEFAULT 'Task',

    CONSTRAINT "TestTable_pkey" PRIMARY KEY ("id")
);
