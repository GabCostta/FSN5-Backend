/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `departamento` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the `Disciplina` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Matricula` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idade` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disciplina` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Matricula" DROP CONSTRAINT "Matricula_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "Matricula" DROP CONSTRAINT "Matricula_disciplinaId_fkey";

-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "dataNascimento",
ADD COLUMN     "idade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "departamento",
ADD COLUMN     "disciplina" TEXT NOT NULL;

-- DropTable
DROP TABLE "Disciplina";

-- DropTable
DROP TABLE "Matricula";

-- CreateTable
CREATE TABLE "Boletim" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "logica" DOUBLE PRECISION NOT NULL,
    "javascript" DOUBLE PRECISION NOT NULL,
    "typescript" DOUBLE PRECISION NOT NULL,
    "node" DOUBLE PRECISION NOT NULL,
    "angular" DOUBLE PRECISION NOT NULL,
    "react" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Boletim_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Boletim_alunoId_key" ON "Boletim"("alunoId");

-- AddForeignKey
ALTER TABLE "Boletim" ADD CONSTRAINT "Boletim_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
