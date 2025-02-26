-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "professorId" INTEGER,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matricula" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "disciplinaId" INTEGER NOT NULL,
    "dataMatricula" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
