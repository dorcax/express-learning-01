/*
  Warnings:

  - Added the required column `imageUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('LIFESTYLE', 'CULTURE', 'IT', 'TRENDING');

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'LIFESTYLE',
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
