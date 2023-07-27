-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInformationInvestor" (
    "id" SERIAL NOT NULL,
    "vc_fund" TEXT NOT NULL,
    "wpp" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "termsAcceptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserInformationInvestor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInformationEntrepreneur" (
    "id" SERIAL NOT NULL,
    "has_received_vc" BOOLEAN NOT NULL DEFAULT false,
    "has_been_incubated" BOOLEAN NOT NULL DEFAULT false,
    "has_clients" BOOLEAN NOT NULL DEFAULT false,
    "areaId" INTEGER NOT NULL,
    "vc_roundId" INTEGER NOT NULL,
    "target_value" INTEGER NOT NULL,
    "target_equity" INTEGER NOT NULL,
    "wpp" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "termsAcceptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserInformationEntrepreneur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VCRound" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VCRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserInformationInvestorToVCRound" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AreaToUserInformationInvestor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserInformationInvestor_userId_key" ON "UserInformationInvestor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInformationEntrepreneur_areaId_key" ON "UserInformationEntrepreneur"("areaId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInformationEntrepreneur_vc_roundId_key" ON "UserInformationEntrepreneur"("vc_roundId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInformationEntrepreneur_userId_key" ON "UserInformationEntrepreneur"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "_UserInformationInvestorToVCRound_AB_unique" ON "_UserInformationInvestorToVCRound"("A", "B");

-- CreateIndex
CREATE INDEX "_UserInformationInvestorToVCRound_B_index" ON "_UserInformationInvestorToVCRound"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AreaToUserInformationInvestor_AB_unique" ON "_AreaToUserInformationInvestor"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaToUserInformationInvestor_B_index" ON "_AreaToUserInformationInvestor"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInformationInvestor" ADD CONSTRAINT "UserInformationInvestor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInformationEntrepreneur" ADD CONSTRAINT "UserInformationEntrepreneur_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInformationEntrepreneur" ADD CONSTRAINT "UserInformationEntrepreneur_vc_roundId_fkey" FOREIGN KEY ("vc_roundId") REFERENCES "VCRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInformationEntrepreneur" ADD CONSTRAINT "UserInformationEntrepreneur_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserInformationInvestorToVCRound" ADD CONSTRAINT "_UserInformationInvestorToVCRound_A_fkey" FOREIGN KEY ("A") REFERENCES "UserInformationInvestor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserInformationInvestorToVCRound" ADD CONSTRAINT "_UserInformationInvestorToVCRound_B_fkey" FOREIGN KEY ("B") REFERENCES "VCRound"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaToUserInformationInvestor" ADD CONSTRAINT "_AreaToUserInformationInvestor_A_fkey" FOREIGN KEY ("A") REFERENCES "Area"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaToUserInformationInvestor" ADD CONSTRAINT "_AreaToUserInformationInvestor_B_fkey" FOREIGN KEY ("B") REFERENCES "UserInformationInvestor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
