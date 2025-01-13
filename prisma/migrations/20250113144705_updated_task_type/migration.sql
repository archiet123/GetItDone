/*
  Warnings:

  - You are about to drop the column `TestType` on the `TaskRecords` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TaskRecords" DROP COLUMN "TestType",
ADD COLUMN     "TaskType" TEXT NOT NULL DEFAULT 'Task';
