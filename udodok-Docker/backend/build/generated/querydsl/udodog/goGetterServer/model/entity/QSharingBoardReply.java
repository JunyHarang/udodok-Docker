package udodog.goGetterServer.model.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QSharingBoardReply is a Querydsl query type for SharingBoardReply
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QSharingBoardReply extends EntityPathBase<SharingBoardReply> {

    private static final long serialVersionUID = -1807393248L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QSharingBoardReply sharingBoardReply = new QSharingBoardReply("sharingBoardReply");

    public final StringPath comment = createString("comment");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final QSharingBoard sharingBoard;

    public final QUser user;

    public QSharingBoardReply(String variable) {
        this(SharingBoardReply.class, forVariable(variable), INITS);
    }

    public QSharingBoardReply(Path<? extends SharingBoardReply> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QSharingBoardReply(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QSharingBoardReply(PathMetadata metadata, PathInits inits) {
        this(SharingBoardReply.class, metadata, inits);
    }

    public QSharingBoardReply(Class<? extends SharingBoardReply> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.sharingBoard = inits.isInitialized("sharingBoard") ? new QSharingBoard(forProperty("sharingBoard"), inits.get("sharingBoard")) : null;
        this.user = inits.isInitialized("user") ? new QUser(forProperty("user"), inits.get("user")) : null;
    }

}

