-- CreateTable
CREATE TABLE "TaskRecords" (
    "id" TEXT NOT NULL,
    "TaskTitle" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "CompleteBy" TIMESTAMP(3),
    "DateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ModifiedData" TIMESTAMP(3),
    "TestType" "Type" NOT NULL DEFAULT 'Task',

    CONSTRAINT "TaskRecords_pkey" PRIMARY KEY ("id")
);
